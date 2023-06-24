import { InputField, TextareaField } from "../UI/InputField";

  
 export const Defaultform = ({ submit_button, items}) => {   

  return (
      <div>
        <form
          action="/api/contact"
          method="post"
          className="grid grid-cols-1 gap-6"
        >
      {items.map(({ label, name, placeholder, required, is_text_area }) => (
        is_text_area ? (
          <TextareaField
            key={label}
            label={label}
            name={name}
            placeholder={placeholder}
            required={required}
          />
        ) : (
          <InputField
            key={label}
            label={label}
            name={name}
            placeholder={placeholder}
            required={required}
          />
        )
      ))}
          <button
            type="submit"
            className="ml-auto inline-flex items-center gap-2"
          >
            {submit_button}
            <span aria-hidden={true} className="text-xl">
              &rarr;
            </span>
          </button>
        </form>
      </div>
    );
  };  