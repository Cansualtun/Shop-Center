import Image from "next/image"
import Link from "next/link"
import { BsCartPlusFill } from "react-icons/bs";
import Button from "../UI/Button/Button"
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {CgDetailsMore} from "react-icons/cg";
import useTranslation from "next-translate/useTranslation";
import { useDispatch } from 'react-redux';
import { addToCart } from "@/store/features/card";
import {addFav} from "@/store/features/favorite";
import { useState , useEffect } from "react";
import Modal from "../UI/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from "./skeleton";


export default function Card(product : any ) {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(true);
    const { t, lang } = useTranslation('common')
    const detail = t('detail')
    const addFavorite = t('addFavorite')
    const addCart = t('addCart')
    const favoritePage = t('favoritePage')
    const areYouSure = t('areYouSure')
    const ratingtitle = t('rating')
    const categorytitle = t('categorytitle')
    const add = t('add')
    const productAdd = t('productAdd')
    const notify = () => toast.success(productAdd);

    useEffect(() => {
            setTimeout(() => setIsLoading(false), 2000);
              }, []);   

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

        const handleAddToFav = () => {
        dispatch(addFav(product))
        notify()
        setIsModalOpen(false);
        };

        const handleAddToCart = () => {
            dispatch(addToCart(product))
            notify()
            setIsModalOpen(false);
            };
    

    const {title, description, rating , id , category } = product
    return (
        <>
         {isLoading && (
        <div>
          <Skeleton/>
        </div>
      )}
        <title>{favoritePage}</title>
        {!isLoading && (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
    </a> 
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <p className="mb-3 font-bold text-red-700 dark:text-gray-400 font-medium">{ratingtitle}: {rating}</p>
        <p className="mb-3 font-bold text-green-500 dark:text-gray-400 font-small">{categorytitle} : {category}</p>
        <hr/>
        <div className="flex justify-center flex-col m-20 gap-5 mt-10">
            {/* Detail */}
        <Link href={`/product/${id}`}>
        <div className="flex justify-center align-center w-full">
           <Button variant="primary" className="flex flex-row gap-5">
            <CgDetailsMore/>
            {detail}
           </Button>
        </div>   
        </Link>
        {/* Add Favorite */}
        <div className="flex justify-center align-center w-full">
        <Button onClick={handleAddToFav} variant="third" className="flex flex-row gap-5">
        <BsCartPlusFill/>
            {addFavorite}
        </Button>
        </div> 
        <div className="flex justify-center align-center w-full">
         {/* AddCart  */}
        <Button onClick={handleOpenModal} variant="secondary" className="flex flex-row gap-5">
        <BsCartPlusFill/>
            {addCart}
        </Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="flex align-center justify-center flex-col">
            {addCart}
            <p className="font-light flex align-center">{areYouSure}</p>
            </div>
            <div className="flex justify-center mt-10">
            <Button onClick={handleAddToCart} variant="success" className="justify-center item-center rounded-md border border-transparent shadow-sm px-4 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">{add}</Button>
            </div>
        </Modal>
        <ToastContainer/>
        </div>
    </div>
</div>
  )}
</>
    )
}