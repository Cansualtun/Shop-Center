import Navbar from '@/components/UI/Navbar';
import useTranslation from "next-translate/useTranslation";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorite.module.css";
import Button from '@/components/UI/Button/Button';
import { removeFromFavorite } from '@/store/features/favorite';
import Empty from '@/components/UI/empty';

export default function Favorite({product}: {product: any} ) {
    const { t, lang } = useTranslation('common')
    const dispatch = useDispatch();
    const favorite = useSelector((state : any) => state.favorite);
    const emptyFav = t('emptyFavorites');
    const remove = t('removeProduct');
    const rating = t('rating');
    const category = t('category');
    const actions = t('actions');
    const tableTitle = t('tableTitle');
  
    return (
        <>
        <Navbar />
        <div>
        <div className={styles.container}>
        {favorite.length === 0 ? (
          <>
          <h1>{emptyFav}</h1>
          <Empty/>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <div>{tableTitle}</div>
              <div>{rating}</div>
              <div>{category}</div>
              <div>{actions}</div>
            </div>
            {favorite.map((product : any) => (
              <div className={styles.body} key="deneme">
                <p>{product.title}</p> 
                <p>{product.rating}</p>
                <p>{product.category}</p>
                <Button variant='secondary' onClick={() => dispatch(removeFromFavorite(product.id))}>
                  {remove}
                </Button>
             </div>
            ))}
            </>
        )}
        </div>
        </div>
        </>
    )
}
