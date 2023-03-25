import Navbar from "@/components/UI/Navbar"
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cart.module.css';
import Image from 'next/image'
import { incrementQuantity, decrementQuantity, removeFromCart } from "@/store/features/card";
import Button from "@/components/UI/Button/Button";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

export default function Cart({product}: {product: any} ) {
    const cart = useSelector((state : any) => state.cart);
    const dispatch = useDispatch();
    const { t, lang } = useTranslation('common')
    const empty = t('yourCartIsEmpty');
    const increase = t('increaseProduct');
    const decrease = t('decreaseProduct');
    const remove = t('removeProduct');

    // const getTotalPrice = () => {
    //     return cart.reduce(
    //       (accumulator : any, product : {product: any}) => accumulator + product.quantity * product.price,
    //       0
    //     );
    //   };

    return (
        <>
        <Navbar/>
        <div className={styles.container}>
        {cart.length === 0 ? (
            <>
          <h1>{empty}</h1>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <div>Title</div>
              <div>Rating</div>
              <div>Category</div>
              <div>Actions</div>
            </div>
            {cart.map((product : any) => (
              <div className={styles.body} key="deneme">
                {/* <div className={styles.image}>
                  <Image src={product.thumbnail} height="90" width="65" alt="deneme" />
                </div> */}
                <p>{product.title}</p> 
                <p>{product.rating}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <div className={styles.buttons}>
                <Button variant="secondary" onClick={() => dispatch(incrementQuantity(product.id))}>
                 {increase}
                </Button>
                <Button variant="primary" onClick={() => dispatch(decrementQuantity(product.id))}>
                  {decrease}
                </Button>
                <Button onClick={() => dispatch(removeFromCart(product.id))}>
                  {remove}
                </Button>
                </div>
                {/* <p>$ {product.quantity * product.price}</p> */}
              </div>
            ))}
             {/* <h2>Grand Total: $ {getTotalPrice()}</h2> */}
          </>
        )}
        <hr/>
      </div>
      </>
    );
  };
