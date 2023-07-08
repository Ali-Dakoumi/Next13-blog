import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export const DefaultAbout = ({ body }) => {

  return (
    <div className="py-2 font-medium text-black bg-theme-heading bannerLink">
      <PrismicRichText field={body} />
    </div>
  );
};
