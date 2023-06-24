import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { InputField } from "../UI/InputField";

export const DefaultNewsletter = ({title,subtitle,placeholder,name,label}) => (
  <div className="py-2 font-medium text-white bg-theme-heading bannerLink">
    <PrismicRichText field={title} />
    <PrismicRichText field={subtitle} />
    <InputField placeholder={placeholder} name={name} label={label}/>
  </div>
);

