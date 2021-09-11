import {useContext, useEffect, useState} from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted,
    setBtnIsHighlighted] = useState(false);
  /* the header cart button component will be a re-evaluated
by react whenever the context changes.   */

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  /* reduce() is a method that enables us to transform an array of data into a single value
into a single number in this case */

  const numberOfCartItems = cartCtx
    .items
    .reduce((currentNumber, item) => {
      return currentNumber + item.amount;
    }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  useEffect(() => {
    if(items.length === 0 ){
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };

  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;