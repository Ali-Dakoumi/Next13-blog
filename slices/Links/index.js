/**
 * @typedef {import("@prismicio/client").Content.LinksSlice} LinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinksSlice>} LinksProps
 * @param {LinksProps}
 */
import NavItem from "../../components/Navigation";

//Variations

const Links = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    "default": NavItem
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

export default Links;
