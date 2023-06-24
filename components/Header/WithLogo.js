import SliceZone from "next-slicezone";
import SliceResolver from "../../sm-resolver";
import { PrismicNextImage } from "@prismicio/next";

export const WithLogo = ({
    logo,
    slices,
  }) => (
  <div className="py-2 font-medium text-white bg-theme-heading bannerLink">
    with logo
    {logo && (
        <div className="h-16 w-52">
          <PrismicNextImage field={data.logo} />
          <span className="sr-only">Home</span>
        </div>
    )}
    <nav className="flex items-center justify-evenly gap-12">
      <SliceZone slices={slices} resolver={SliceResolver} />
    </nav>
  </div>
);

