/**
 * @typedef {import("@prismicio/client").Content.LinksSlice} LinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinksSlice>} LinksProps
 * @param {LinksProps}
 */
import defaultNewsletter from "../../components/Newsletter";

//Variations

const Newsletter = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    "default": defaultNewsletter
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

export default Newsletter;
