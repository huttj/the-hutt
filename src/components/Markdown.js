import React from 'react';
import {marked} from 'marked'; 

export default function Markdown(props) {
  return <div dangerouslySetInnerHTML={{ __html: marked(props.children) }} className={props.className} />
}