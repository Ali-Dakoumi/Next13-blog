
import * as prismic from "@prismicio/client";
import { createClient } from '../prismicio';
import { SliceZone } from "@prismicio/react";
import SliceResolver from "../../sm-resolver";
import ArticlesComponent from "../../components/ArticlesComponent";

export default async function Home() {
  const client = createClient();
  let homepage, articles
  try {
     homepage = await client.getSingle("page","homepage");
     articles = await client.getAllByType("article", {fetchLinks: "author.name"});
  } catch (error) {
    console.log(error)
    return
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {JSON.stringify(articles)} */}
      <ArticlesComponent  articles={articles} />
        {/* <SliceZone slices={data.slices} resolver={SliceResolver} /> */}
    </main>
  )
}

