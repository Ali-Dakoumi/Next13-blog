import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export const Article = ({  data: {
  title,
  body,
  article_image,
  author: { data: { name: [{ text : author_name }] } } 
}
  }) => (
  <div className="py-2 font-medium text-white bg-theme-heading bannerLink">
    <p>{author_name}</p>
    <PrismicRichText field={title} />
    {/* <PrismicRichText field={body} /> */}
    <PrismicNextImage field={article_image} />
    <PrismicRichText field={body} />
  </div>
);

