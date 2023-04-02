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

export default function product(products : Props) {
  //  ürünün adına göre search yapabilecek inputun kodunu yazar mısın

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filteredProducts, setFilteredProducts] = useState(products.products);

  const handleChange = (e : any) => {
    setSearch(e.target.value);
      setFilteredProducts(
      products.products.filter((product : any) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      ) 
    );
  };



  return (
    <>
    <Navbar />
    <hr/> 
    <div className="flex align-center justify-center">
    <input
                className="mt-10 px-3 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleChange}
              />
    </div>         
    <div className="grid grid-cols-1 ml-10 gap-4 p-10 md:grid-cols-3 sm:grid-cols-2"> 
        {products.products.map((product : any) => {
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