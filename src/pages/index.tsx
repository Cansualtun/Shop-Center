import Head from 'next/head'
import { Inter } from 'next/font/google'
import axios from 'axios'
import Navbar from '@/components/UI/Navbar'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import Layout from  '@/components/UI/Layout'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const { t, lang } = useTranslation('common')
  const hw = t('title')
  console.log(hw);
  
  return (
    <>
     <Layout>
      <Head>
        <title>Shop Center</title>
      </Head>
      <Navbar/>
      <div className="grid grid-cols-1 ml-10 gap-4 p-20 md:grid-cols-3">{hw}</div>
      </Layout>
    </>
  )
}
