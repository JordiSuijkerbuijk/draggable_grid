import React, { useEffect } from 'react';
import clsx from 'clsx';

import style from './index.module.scss';

const Home = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Draggable = require('@shopify/draggable');
    //   new Draggable.Sortable(document.querySelectorAll('.draggableContainer'), {
    //     draggable: '.draggable',
    //     sortAnimation: {
    //       duration: 200,
    //       easingFunction: 'ease-in-out',
    //     }, // Or [SortAnimation]
    //   })

      console.log(Draggable)
    // }



      const containers = document.querySelectorAll('.draggableContainer');

      if (containers.length === 0) {
        return false;
      }
    
      new Draggable.Sortable(containers, {
        draggable: '.draggable',
        plugins: [Draggable.Plugins.SortAnimation],
        swapAnimation: {
          duration: 200,
          easingFunction: 'ease-in-out',
        },
      })

      const cards = document.querySelectorAll('.control');

      [...cards] && [...cards].length > 0 && [...cards].map((item, key) => {
        item.addEventListener("click", function() {
          console.log('test');
        });
      })

      console.log('cards', cards);
    }
  }, []);

  function changeWidth(e, value) {
    console.log('test')
    if (value === 'small') {
      e.target.parentNode.style.width = 'calc(33% - 20px)';
      return;
    }
    if (value === 'medium') {
      console.log('test')
      e.target.parentNode.style.width = 'calc(50% - 20px)';
      console.log(e.target.parentNode.classList)
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
      <div className={clsx([style.container, 'draggableContainer'])}>
        <div className={clsx([style.card, style.red, 'draggable'])} draggable>
          <div onClick={(e) => changeWidth(e, 'small')} className="control" id="small"> small </div>
          <div onClick={(e) => changeWidth(e, 'medium')} className="control" id="medium"> medium </div>
          <div onClick={(e) => changeWidth(e, 'large')} className="control" id="large"> large </div>
        </div>
        <div className={clsx([style.card, style.blue, 'draggable'])} draggable>
          <div onClick={(e) => changeWidth(e, 'small')}> small </div>
          <div onClick={(e) => changeWidth(e, 'medium')}> medium </div>
          <div onClick={(e) => changeWidth(e, 'large')}> large </div>
        </div>
        <div className={clsx([style.card, style.green, 'draggable'])} draggable>
          <div onClick={(e) => changeWidth(e, 'small')}> small </div>
          <div onClick={(e) => changeWidth(e, 'medium')}> medium </div>
          <div onClick={(e) => changeWidth(e, 'large')}> large </div>
        </div>
        <div
          className={clsx([style.card, style.yellow, 'draggable'])}
          draggable
        ></div>
        <div
          className={clsx([style.card, style.pink, 'draggable'])}
          draggable
        ></div>
        <div
          className={clsx([style.card, style.black, 'draggable'])}
          draggable
        ></div>
      </div>
    </main>
  );
};

export default Home;
