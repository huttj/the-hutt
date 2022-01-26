import React, { useEffect, useState } from 'react'
import {css} from '@emotion/css';
import Markdown from '../components/Markdown';
import Roles from '../components/Roles';
import Title from '../components/Title';

export default () => (
  <div className={wrapper}>
    <Title />
    <h1>Joshua Hutt</h1>
    <Roles />
    <Markdown>{content}</Markdown>
  </div>
)


const content = `
Hey there.

This is me. The titles up there are a bit tongue-in-cheek, but they're also
pretty accurate.

Software is a huge part of my life. I spend a majority of my waking hours of
my spare time thinking about it, working on it, writing about it.

If you're leading devs, building an app, or looking for a job, I want to help.

<a href="https://calendly.com/huttj/15min" target="_blank">Book some time on my calendar</a>
and let's talk.
`;


const wrapper = css`
  /* text-align: center; */
  & > h1:first-child {
    margin-bottom: 0px;

    & + p {
      margin-top: 0;
      margin-bottom: 36px;
      font-size: 1.25rem;
    }
  }




`;