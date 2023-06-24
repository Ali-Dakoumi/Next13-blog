import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from "../../components/Header"
import { createClient } from '../prismicio';
import { Seo } from '../../components/Seo';
const inter = Inter({ subsets: ['latin'] })

 
export async function generateMetadata() {
  const client = createClient()
  const {data} = await client.getSingle("default_seo");
  console.log("🚀 ~ file: layout.js:15 ~ generateMetadata ~ default_seo:", data)
 
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
  const client = createClient()
  let header
  try {
    header = await client.getSingle("header");
  } catch (error) {
    console.log(error)
  }
  return (
    <html lang="en">
      <Seo />
      <body className="">
      <Header {...header.data} />
        {children}
      </body>
    </html>
  )
}


 
