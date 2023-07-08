
import client from '../../../../lib/client';
import Article from '../../../../components/Article';

export default async function Page({params}) {  
    let article

    try {
      article = await client.getByUID('article',params.uid, { fetchLinks: 'author.name' },)
     } catch (error) {
       console.log(error)
     }
     
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-10">
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