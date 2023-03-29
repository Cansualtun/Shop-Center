import Navbar from "@/components/UI/Navbar"
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cart.module.css';
import Image from 'next/image'
import { removeFromCart } from "@/store/features/card";
import Button from "@/components/UI/Button/Button";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import Empty from "@/components/UI/empty";

export default function Cart({product}: {product: any} ) {
    const cart = useSelector((state : any) => state.cart);
    const dispatch = useDispatch();
    const { t, lang } = useTranslation('common')
    const empty = t('yourCartIsEmpty');
    const increase = t('increaseProduct');
    const decrease = t('decreaseProduct');
    const remove = t('removeProduct');
    const tableTitle = t('tableTitle');
    const ratingtitle = t('ratingtitle');
    const category = t('category');
    const actions = t('actions');
    const description = t('description');
    

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
          {/* <p className="flex align-center justify-center w-50 h-50"><iframe src="https://embed.lottiefiles.com/animation/112136"></iframe></p> */}
          <Empty/>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <div>{tableTitle}</div>
              <div>{ratingtitle}</div>
              <div>{category}</div>
              <div>{description}</div>
              <div>{actions}</div>
            </div>
            {cart.map((product : any) => (
              <div className={styles.body} key="deneme">
                {/* <div className={styles.image}>
                  <Image src={product.thumbnail} height="90" width="65" alt="deneme" />
                </div> */}
                <p>{product.title}</p> 
                <p>{product.rating}</p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <div className={styles.buttons}>
                <Button variant="third" className="!w-full" onClick={() => dispatch(removeFromCart(product.id))}>
                  {remove}
                </Button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      </>
    );
  };
