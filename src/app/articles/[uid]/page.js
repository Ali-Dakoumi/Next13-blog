
import { SliceZone } from '@prismicio/react';
import { createClient } from '../../../prismicio';
import Article from '../../../../components/Article';

export default async function Page({params}) {
  const client = createClient()
  
    let article

    try {
      article = await client.getByUID('article',params.uid, { fetchLinks: 'author.name' },)
      console.log("🚀 ~ file: page.js:13 ~ Page ~ article:", article)
     } catch (error) {
       console.log(error)
     }
     
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      articles page
        {params.uid}
        <Article {...article} />
    </main>
  )
}

// export async function generateStaticParams() {
//     const client = createClient()
//     const articles = await client.getAllByType("article");
  
//     return articles.map((article) => {
//       return { uid: article.uid };
//     });
// }