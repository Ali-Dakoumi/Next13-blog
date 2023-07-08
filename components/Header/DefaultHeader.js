import SliceZone from "next-slicezone";
import SliceResolver from "../../sm-resolver";

export const DefaultHeader = ({
    slices
  }) => (
    <div className="py-4 px-24 w-min font-medium text-black bg-theme-heading bannerLink">
    <nav className="flex items-center justify-evenly gap-12">
      <SliceZone slices={slices} resolver={SliceResolver} />
    </nav>
  </div>
);

