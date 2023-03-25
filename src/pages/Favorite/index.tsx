import Navbar from '@/components/UI/Navbar';
import useTranslation from "next-translate/useTranslation";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorite.module.css";
import Button from '@/components/UI/Button/Button';
import { removeFromFav } from '@/store/features/favorite';

export default function Favorite() {
    const { t, lang } = useTranslation('common')
    const favorite = useSelector((state : any) => state.favorite);
    const dispatch = useDispatch();
    const emptyFav = t('emptyFavorites');
    const remove = t('removeProduct');

    return (
        <>
        <Navbar />
        <div>
        <div className={styles.container}>
        {favorite.length === 0 ? (
            <>
          <h1>{emptyFav}</h1>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <div>Title</div>
              <div>Rating</div>
              <div>Category</div>
              <div>Actions</div>
            </div>
            {favorite.map((product : any) => (
              <div className={styles.body} key="deneme">
                {/* <div className={styles.image}>
                  <Image src={product.thumbnail} height="90" width="65" alt="deneme" />
                </div> */}
                <p>{product.title}</p> 
                <p>{product.rating}</p>
                <p>{product.category}</p>
                <Button onClick={() => dispatch(removeFromFav(product.id))}>
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
