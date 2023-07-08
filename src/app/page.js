
import client from '../../lib/client';
import ArticlesComponent from "../../components/ArticlesComponent";

export default async function Home() {
  let homepage, articles
  try {
     articles = await client.getAllByType("article", {fetchLinks: "author.name"});
  } catch (error) {
    console.log(error)
    return
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-10">
      <ArticlesComponent  articles={articles} />
    </main>
  )
}

