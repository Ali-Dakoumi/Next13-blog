import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from "../../components/Header"
import client from '../../lib/client';
import { Seo } from '../../components/Seo';
const inter = Inter({ subsets: ['latin'] })

 
export async function generateMetadata() {
  const {data} = await client.getSingle("default_seo");
 
  return {
    title: data.meta_title,
    description: data.meta_description,
    image:{
      url: data.meta_image.url,
      alt:  data.meta_image.url ?? "",
      width: 800,
      height: 600,
    }
  }
} 


export default async function RootLayout({ children }) {
  let header
  try {
    header = await client.getSingle("header");
  } catch (error) {
    console.log(error)
  }
  return (
    <html lang="en">
      <Seo />
      <body className="bg-gray-200">
      <Header {...header.data} />
        {children}
      </body>
    </html>
  )
}


 
