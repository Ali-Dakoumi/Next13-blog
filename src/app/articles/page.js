import { SliceZone } from "@prismicio/react";
import ArticlesComponent from "../../../components/ArticlesComponent";
import { createClient } from "@/prismicio";
import SliceResolver from "../../../sm-resolver";
import Article from "../../../components/Article";

export default async function Page({ params }) {
  const client = createClient();
  let data = null,
    articles; // Assigning a default value

  try {
    ({ data } = await client.getByUID("page", "articles"));
    // Process the data or perform any necessary operations
    articles = await client.getAllByType("article", {
      fetchLinks: "author.name",
    });
  } catch (error) {
    console.log(error);
    return;
  }
  console.log("🚀 ~ file: page.js:18 ~ Page ~ articles:", articles.data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      articles page
      <ArticlesComponent  articles={articles} />
    </main>
  );
}
