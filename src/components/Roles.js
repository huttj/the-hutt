import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';

const roles = `
Technologist
Software Developer
Entrepreneur
Startup Enthusiast
Founder
Thinker
Problem Solver
Philosopher
Dreamer
Wizard
Guru
Ninja
Artisan
Teacher
Coach
Facilitator
Contrarian
Jokester
`.trim().split('\n').map(n => n.trim());


export default function Roles(props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {

    let timeout;

    function randomizeRole() {
      setIdx(i => i + 1);
      timeout = setTimeout(randomizeRole, 3000 * Math.random() + 200);
    }

    randomizeRole();

    return () => clearTimeout(timeout);
  }, []);

  const role = roles[idx % roles.length];
  const letters = role.split('').map(l => <span>{l}</span>);

  return <p className={pClass} >{letters}</p>;
}

const pClass = css`
  width: 12rem;
  font-style: italic;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;