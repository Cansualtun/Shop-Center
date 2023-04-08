import CardDetail from "@/components/CardDetail/CardDetail";
import axios from "axios";
import Navbar from "@/components/UI/Navbar";



export default function ProductDetail({product}: {product: any} ) {
    return (
        <>
        <title>Detail Page</title>
        <Navbar/>
        <CardDetail product={product}/>
        </>
    )
}

export async function getServerSideProps(context : any) {
    const {id} = context.params;
    const { data } = await axios(`https://dummyjson.com/products/${id}`);
    return {
        props: {
            product: data || null ,
        },
    };      
    }