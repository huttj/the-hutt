import React, { useEffect } from 'react'
import { Root, Routes, addPrefetchExcludes, useSiteData, } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import {css} from '@emotion/css';

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <nav className={navClass}>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/story">My story</Link>
        <Link to="/blog">Writing</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em className={loadingClass}>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <div className={footerClass}>
        <hr/>
        <p>Made with 🧠 and 🫀 by Joshua</p>
      </div>
    </Root>
  )
}

const loadingClass = css`
  display: block;
  margin: 36px 0;
`;

const navClass = css`
  a {
    /* color: white; */

    @media (prefers-color-scheme: light) {
      /* color: inherit; */
    }

    margin: 0 1rem 0 0;
    text-decoration: underline;
  }
`;

const footerClass = css`
  margin-top: 2rem;
  hr {
    margin: 1rem;
  }
  p {
    text-align: center;
    /* color: rgba(0,0,0, .5); */
  }
  opacity: .25;
`;

export default App
