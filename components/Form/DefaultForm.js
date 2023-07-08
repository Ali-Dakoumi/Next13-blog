"use client";
import { InputField, TextareaField } from "../UI/InputField";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {GrValidate} from "react-icons/gr"

export const Defaultform = ({ submit_button, items }) => {
  const [isSent, setIsSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ggqaiq",
        "template_en5o4v8",
        form.current,
        "BJJ-9niDfhMNfs3lY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {isSent ? (<p className="text-green-700 text-xl flex justify-center items-center gap-2"> <GrValidate /> message sent!</p>) : (
      <form
        className="flex flex-col items-center justify-center"
        ref={form}
        onSubmit={sendEmail}
      >
        {items.map(({ label, name, placeholder, required, is_text_area }) =>
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
        )}
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
      )}
    </div>
  );
};
