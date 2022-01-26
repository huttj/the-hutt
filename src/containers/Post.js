import React from 'react'
import { useRouteData } from 'react-static'
import Markdown from 'react-markdown';
import { Link } from 'components/Router'
import Title from '../components/Title';

export default function Post() {
  const { post } = useRouteData()
  return (
    <div>
      <Title title={post.title} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}
