import path from 'path'
import axios from 'axios'
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import chokidar from 'chokidar'
import { rebuildRoutes } from 'react-static/node';
chokidar.watch('src/blog').on('all', rebuildRoutes);
chokidar.watch('src/content').on('all', rebuildRoutes);


async function loadMarkdownFromDir(path) {
  return (await fs.promises.readdir(path))
    .map(function (filename) {
      const { data, content } = matter(fs.readFileSync(`${path}/${filename}`, 'utf8'));
      return Object.assign({
        content: marked(content),
        filename,
        title: marked.lexer(content)[0]?.text,
        id: filename.split('.')[0],
      }, data);
    });
}

export default {

  getRoutes: async ({ dev }) => {

    const posts = await loadMarkdownFromDir('src/blog');
    const content = await loadMarkdownFromDir('src/content');

    return [
      ...content.map(data => ({
        path: `/${data.id}`,
        getData: () => data,
        template: 'src/containers/Content',
      })),
      {
        path: '/blog',
        getData: () => ({ posts }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],

}
