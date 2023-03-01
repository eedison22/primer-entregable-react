import React from 'react';
import Button from '../Button/Button';

import './Card.css';

const Card = ({framework, changeFramework, }) => {
  return (
    <div className='card'>
        <section className='card__section'>
           <p className='card__phrase'>
                {framework.phrase}
            </p>
            <h2 className='card__author'>
                Autor: {framework.author}
            </h2>
            <div className='card__container__button'>
                <Button handleClick={changeFramework} />
            </div>
        </section>
    </div>
  );
};

export default Card;