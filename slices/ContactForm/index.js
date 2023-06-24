/**
 * @typedef {import("@prismicio/client").Content.ContactFormSlice} ContactFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSlice>} ContactFormProps
 * @param {ContactFormProps}
 */
import DefaultForm from "../../components/Form";

//Variations

const ContactForm = ({ slice: { primary, items, variation }, i }) => {
  const componentMap = {
    "default": DefaultForm
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
export default ContactForm;
