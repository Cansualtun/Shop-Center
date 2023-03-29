import Card from "@/components/Card/Card";
import axios from "axios";
import Navbar from "@/components/UI/Navbar";

type Product = {
    title : string;
    description : string;
    price : number;
    rating : number;
    thumbnail : string;
    id : number;
  }
  type Props = {
    products: Product[];
  }


export default function product(products : Props) {
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-1 ml-10 gap-4 p-10 md:grid-cols-3 sm:grid-cols-2"> 
        {products.products.map((product : any) => {
            return (
                <div key={product.id}>
                <Card id={product.id} title={product.title} rating={product.rating} category={product.category} description={product.description}/>  
                </div>
            )
        })}
    </div>
    </>
  )
}

// export const getServerSideProps = async ({ locales }: any) => {
//   console.log(locales)
//   const { data } = await axios("https://dummyjson.com/products");
//   return {props: {
//       ...(await serverSideTranslations(locales, ['common'])),
//         products: data.products,  
//   }
// };
// };


export async function getServerSideProps(context : any )  {
    const { data } = await axios("https://dummyjson.com/products");
    console.log(data)
    return {
      props: {
        products: data.products,  
        // ...(await serverSideTranslations(locale, ['common'])) 
      },
    };
  }