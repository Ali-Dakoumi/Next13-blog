import SliceZone from "next-slicezone";
import SliceResolver from "../../sm-resolver";

export const DefaultHeader = ({
    slices
  }) => (
    <div className="py-2 font-medium text-white bg-theme-heading bannerLink">
    DefaultHeader
    <nav className="flex items-center justify-evenly gap-12">
      <SliceZone slices={slices} resolver={SliceResolver} />
    </nav>
  </div>
);

