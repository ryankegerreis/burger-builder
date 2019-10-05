import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(eachKey => {
      return [...Array(props.ingredients[eachKey])].map((_, i) => {
        return <BurgerIngredient key={eachKey + i} type={eachKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients.</p>
  }

  console.log(transformedIngredients)
  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />

    </div>
  )
}
