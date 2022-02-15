import React, { useEffect } from 'react';
import clsx from 'clsx';

import style from './index.module.scss';

const Home = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Draggable = require('@shopify/draggable');
      new Draggable.Sortable(document.querySelectorAll('.draggableContainer'), {
        draggable: '.draggable',
        sortAnimation: {
          duration: 200,
          easingFunction: 'ease-in-out',
        }, // Or [SortAnimation]
      })
        .on('swappable:start', () => console.log('sortable:start'))
        .on('swappable:swapped', () => console.log('sortable:sort'))
        .on('swappable:stop', () => console.log('sortable:stop'));
    }
  }, []);

  function changeWidth(e, value) {
    if (value === 'small') {
      e.target.parentNode.style.width = 'calc(33% - 20px)';
      return;
    }
    if (value === 'medium') {
      e.target.parentNode.style.width = 'calc(50% - 20px)';
      return;
    }
    if (value === 'large') {
      e.target.parentNode.style.width = '100%';
      return;
    }
  }

  return (
    <main>
      <h1>Hello from Preact</h1>
      <div class={clsx([style.container, 'draggableContainer'])}>
        <div class={clsx([style.card, style.red, 'draggable'])} draggable>
          <div onClick={(e) => changeWidth(e, 'small')}> small </div>
          <div onClick={(e) => changeWidth(e, 'medium')}> medium </div>
          <div onClick={(e) => changeWidth(e, 'large')}> large </div>
        </div>
        <div class={clsx([style.card, style.blue, 'draggable'])} draggable>
          <div onClick={(e) => changeWidth(e, 'small')}> small </div>
          <div onClick={(e) => changeWidth(e, 'medium')}> medium </div>
          <div onClick={(e) => changeWidth(e, 'large')}> large </div>
        </div>
        <div class={clsx([style.card, style.green, 'draggable'])} draggable>
          <div onClick={(e) => changeWidth(e, 'small')}> small </div>
          <div onClick={(e) => changeWidth(e, 'medium')}> medium </div>
          <div onClick={(e) => changeWidth(e, 'large')}> large </div>
        </div>
        <div
          class={clsx([style.card, style.yellow, 'draggable'])}
          draggable
        ></div>
        <div
          class={clsx([style.card, style.pink, 'draggable'])}
          draggable
        ></div>
        <div
          class={clsx([style.card, style.black, 'draggable'])}
          draggable
        ></div>
      </div>
    </main>
  );
};

export default Home;
