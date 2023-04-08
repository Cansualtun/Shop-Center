import Card from "@/components/Card/Card";
import axios from "axios";
import Navbar from "@/components/UI/Navbar";
import {useState}  from "react";

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

export default function product(props: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <Navbar />
    <hr/> 
    <div className="flex align-center justify-center mt-10">
    <input className="text-black" type="text" placeholder="Search products by title" onChange={(e) => setSearchTerm(e.target.value)} />
    </div>         
    <div className="grid grid-cols-1 ml-10 gap-4 p-10 md:grid-cols-3 sm:grid-cols-2"> 
    {props.products
          .filter((product : any) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((product : any) => {
            return (
              <>
                <div key={product.id}>
                <Card id={product.id} title={product.title} rating={product.rating} category={product.category} description={product.description}/>  
                </div>
                </>
            )
        })}
    </div>
    </>
  )
}



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