import Head from 'next/head'
import { Inter } from 'next/font/google'
import axios from 'axios'
import Navbar from '@/components/UI/Navbar'
import useTranslation from 'next-translate/useTranslation'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@/components/Card/Card';

const inter = Inter({ subsets: ['latin'] })

type Product = {
  title : string;
  description : string;
  price : number;
  rating : number;
  thumbnail : string;
  category: string;
  id : number;
}
type Props = {
  products: Product[];
}

export default function Home(products : Props) {
  const { t, lang } = useTranslation('common')
  const hw = t('title')
  console.log(hw);
  
  return (
    <>
      <Head>
        <title>Shop Center</title>
      </Head>
      <Navbar/>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
      className={"bg-red-500"}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      autoplay={{
        delay: 5000
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {products.products.map((product : any) => {
        return (
          <SwiperSlide key={product.id} className={"!flex item-center justify-center p-10 sm-"}>
            <Card id={product.id} title={product.title} rating={product.rating} category={product.category} />  
          </SwiperSlide>
        )
      }
      )}
    </Swiper>
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