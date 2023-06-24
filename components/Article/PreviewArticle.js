import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export const PreviewArticle = ({ 
  uid,
  title,
  article_image,
  author: { data: { name: [{ text : author_name }] } } 
  }) => (
  <div className="py-2 font-medium text-white bg-theme-heading bannerLink">
    Preview
    <p>{author_name}</p>
    <Link href={`/articles/${uid}`}><PrismicRichText field={title} /></Link>
    <Link href={`/articles/${uid}`}><PrismicNextImage field={article_image} /></Link>
  </div>
);

