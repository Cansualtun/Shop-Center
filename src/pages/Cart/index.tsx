import Navbar from "@/components/UI/Navbar"
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cart.module.css';
import Image from 'next/image'
import { increaseQuantity, removeFromCart } from "@/store/features/card";
import Button from "@/components/UI/Button/Button";
import useTranslation from "next-translate/useTranslation";
import { useState, useEffect} from "react";
import Skeleton from "../../pages/skeleton";
import { BsCartPlusFill } from "react-icons/bs";
import Modal from "@/components/UI/Modal";
import { ToastContainer, toast } from 'react-toastify';


export default function Cart({product}: {product: any} ) {
    const cart = useSelector((state : any) => state.cart);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [count, setCount] = useState(0);
    const { t, lang } = useTranslation('common')
    const empty = t('yourCartIsEmpty');
    const remove = t('removeProduct');
    const tableTitle = t('tableTitle');
    const ratingtitle = t('ratingtitle');
    const category = t('category');
    const actions = t('actions');
    const description = t('description');
    const cartList = t('cartList');
    const areYouSure = t('areYouSure')
    const productRemove = t('productRemove')
    const notify = () => toast.success(productRemove);

    useEffect(() => {
          setTimeout(() => setIsLoading(false), 2000);
        }, []);

      const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

    const handleRemoveFromCart = (id : any) => {
        dispatch(removeFromCart(id))
        setIsModalOpen(false);
        notify()
    };

    return (
        <>
         <Navbar/>
          {isLoading && (
            <div>
                <Skeleton/>
            </div>
        )}
         {!isLoading && (
        <div className="p-10 align-center">
        {cart.length === 0 ? (
            <>
          <h1 className="flex align-center justify-center mb-10">{empty}</h1>
          </>
        ) : (
          <>
            <h1 className="text-lg flex align-center justify-center mb-10 font-semibold hover:italic light:text-black">{cartList}</h1>
            <div className="relative overflow-x-auto w-full rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">{tableTitle}</th>
          <th scope="col" className="px-6 py-3">{ratingtitle}</th>
          <th scope="col" className="px-6 py-3">{category}</th>
          <th scope="col" className="px-6 py-3">{description}</th>
          <th scope="col" className="px-6 py-3">{actions}</th>
           </tr>   
          </thead>
            {cart.map((product : any) => (
              <tbody key={"deneme"}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.title}</th> 
                <td scope="row" className="px-6 py-4">{product.rating}</td>
                <td scope="row" className="px-6 py-4">{product.category}</td>
                <td scope="row" className="px-6 py-4">{product.description}</td>
                <td scope="row" className="px-6 py-4">
                <Button onClick={handleOpenModal} variant="third" className="flex flex-row gap-5">
                 <BsCartPlusFill/>
                  {remove}
                  </Button>
                  <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <div className="flex align-center items-center justify-center flex-col gap-2">
                  {remove}
                   <p className="font-light">{areYouSure}</p>
                   </div>
                   <div className="flex justify-center mt-10">
                  <Button variant="secondary" className="mt-2" onClick={handleRemoveFromCart}>
                  {remove}
                </Button>
                </div>
                </Modal>
                </td>
                </tr>
                </tbody>
            ))}
          </table>
          <ToastContainer/>
          </div>
          </>
        )}
        </div>
        )}
        </>
    )
}

