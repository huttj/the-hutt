import React, { useEffect } from 'react';
import { useRouteData } from 'react-static'
import Markdown from '../components/Markdown';
import Title from '../components/Title';

export default () => {

  const { title, content, id } = useRouteData()
  return <>
    <Title title={title} />
    <Markdown className={id}>{content}</Markdown>
  </>;
}
