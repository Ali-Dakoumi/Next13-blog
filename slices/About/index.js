/**
 * @typedef {import("@prismicio/client").Content.LinksSlice} LinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinksSlice>} LinksProps
 * @param {LinksProps}
 */
import DefaultAbout from "../../components/About";

//Variations

const About = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    "default": DefaultAbout
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
export default About;
