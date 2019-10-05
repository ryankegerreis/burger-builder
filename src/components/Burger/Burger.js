import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(eachKey => {
      return [...Array(props.ingredients[eachKey])].map((_, i) => {
        return <BurgerIngredient key={eachKey + i} type={eachKey} />
      })
    })

  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />

    </div>
  )
}
