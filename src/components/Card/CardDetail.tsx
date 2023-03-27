import Rating from "../UI/Rating"
import {AiOutlineStock} from "react-icons/ai"
import useTranslation from 'next-translate/useTranslation';

export default function CardDetail ({product} : {product: any}) {
    const { t, lang } = useTranslation('common')
    const ratingtitle = t('rating')
    const stocktitle = t('stock')
    const {title, description, rating , thumbnail , stock } = product
    return (
        <>
        <div className="flex justify-center flex-col p-5 mt-10 m-20 bg-white border border-gray-200 rounded-xlg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-center">
        <img width={300} height={300} className="rounded-md" src={thumbnail} alt="thumbnail" />
    </div>
    <div className="flex justify-center flex-col text-center gap-2">
        <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <hr />
        <div className="flex justify-center">
        <Rating />
        </div>
        <p className="mb-3 font-bold font-md text-gray-700 dark:text-gray-400">{ratingtitle}: {rating}</p>
        <hr/>
        <div className="flex justify-center items-center flex-col gap-2">
         <AiOutlineStock color="red" size={30} />
        <p className="font-bold" font-bold >{stocktitle} : {stock}</p>
        </div>
    </div>
</div>
        </>
    )
}