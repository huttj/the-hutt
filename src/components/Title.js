import React, { useEffect } from "react";

export default (props) => {
  useEffect(() => {
    const page = props.title ? props.title + ' | ' : '';
    const oldTitle = document.title;
    document.title = `${page}Joshua Hutt`;
    return () => { document.title = oldTitle };
  }, []);
  return null;
}