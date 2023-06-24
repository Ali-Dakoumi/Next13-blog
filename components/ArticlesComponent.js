import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { PreviewArticle } from "./Article";

const ArticlesComponent = ({ articles }) => {
  
  return (
    <div>
      {articles.map(({ data, uid }, i) => (
        <PreviewArticle key={i} uid={uid} {...data} />
      ))}
    </div>
  );
};

export default ArticlesComponent;