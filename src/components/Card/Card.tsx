import Image from "next/image"
import Link from "next/link"
import { BsCartPlusFill } from "react-icons/bs";
import Button from "../UI/Button/Button"
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {CgDetailsMore} from "react-icons/cg";

export default function Card(product : any) {
    const {title, description, rating , images , id , category , thumbnail} = product
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        {/* <img width={100} height={100} className="rounded-t-lg" src={thumbnail} alt="thumbnail" /> */}
    </a> 
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <p className="mb-3 font-bold text-red-700 dark:text-gray-400 font-medium">Rating : {rating}</p>
        <p className="mb-3 font-bold text-green-500 dark:text-gray-400 font-small">Category : {category}</p>
        <hr/>
        <div className="flex justify-center flex-col m-20 gap-5 mt-10">
        <Link href={`/product/${id}`}>
           <Button variant="third" className="flex flex-row gap-5">
            <CgDetailsMore/>
            Detayları Gör
           </Button>
        </Link>
        <Link href={"/Favorite"}>
        <Button variant="primary" className="flex flex-row gap-5">
        <MdOutlineFavoriteBorder/>
            Favorilere Ekle
        </Button>
        </Link>
        <Link href={"/Cart"}>
        <Button variant="secondary" className="flex flex-row gap-5">
        <BsCartPlusFill/>
            Sepete Ekle
        </Button>
        </Link>
        </div>
    </div>
</div>
    )
}