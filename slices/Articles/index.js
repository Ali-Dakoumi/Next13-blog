/**
 * @typedef {import("@prismicio/client").Content.LinksSlice} LinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinksSlice>} LinksProps
 * @param {LinksProps}
 */
import ArticlesComponent from "../../components/ArticlesComponent";

//Variations

const Articles = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    "default": ArticlesComponent
  };
  const VariableComponent = componentMap[variation];
  return (
    <VariableComponent
      id={`${i}-navigation-slice`}
      {...primary}
      items={items}
    />
  );
};
export default Articles;
