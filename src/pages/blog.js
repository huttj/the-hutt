import React from 'react'
import { useRouteData } from 'react-static'
import Title from '../components/Title';

//
import { Link } from 'components/Router'

export default function Blog() {
  const { posts } = useRouteData()

  return (
    <div>
      <Title title="Blog" />
      <h1>Writing</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      {/* <a href="#top" id="bottom">
        Scroll to top!
      </a> */}
    </div>
  )
}
