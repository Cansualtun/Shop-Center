import Navbar from '@/components/UI/Navbar';
import useTranslation from "next-translate/useTranslation";
import { useSelector, useDispatch } from "react-redux";
import Button from '@/components/UI/Button/Button';
import { removeFromFavorite } from '@/store/features/favorite';
import { useState, useEffect} from "react";
import Skeleton from "../../pages/skeleton";

export default function Favorite({product}: {product: any} ) {
    const { t, lang } = useTranslation('common')
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const favorite = useSelector((state : any) => state.favorite);
    const emptyFav = t('emptyFavorites');
    const remove = t('removeProduct');
    const rating = t('rating');
    const category = t('category');
    const actions = t('actions');
    const tableTitle = t('tableTitle');
    const favoriteList = t('favoriteList');


    useEffect(() => {
          setTimeout(() => setIsLoading(false), 2000);
        }, []);
  
    return (
        <>
        <Navbar />
        {isLoading && (
            <div>
                <Skeleton/>
            </div>
        )}
        {!isLoading && (
        <div>
        <div className='p-10 align-center'>
        {favorite.length === 0 ? (
          <>
          <h1 className='flex align-center justify-center'>{emptyFav}</h1>
          </>
        ) : (
          <>
          <h1 className="text-lg flex align-center justify-center mb-10 font-semibold hover:italic light:text-black">{favoriteList}</h1>
          <div className="relative overflow-x-auto w-full rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    {tableTitle}
                </th>
                <th scope="col" className="px-6 py-3">
                    {rating}
                </th>
                <th scope="col" className="px-6 py-3">
                    {category}
                </th>
                <th scope="col" className="px-6 py-3">
                   {actions}
                </th>
            </tr>
        </thead>
            {favorite.map((product : any) => (
              <tbody key={""}>
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.title}</th>
               <td scope="row" className="px-6 py-4">{product.rating}</td>
               <td scope="row" className="px-6 py-4">{product.category}</td>
                <Button className="mt-2" variant='third' onClick={() => dispatch(removeFromFavorite(product.id))}>
                  {remove}
                </Button>
                </tr>
                </tbody>
            ))}
            </table>
            </div>
            </>
        )}
        </div>
      </div>
        )}
        </>
    )
}
