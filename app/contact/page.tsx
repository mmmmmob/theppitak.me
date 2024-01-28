import React from "react";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex h-[calc(100dvh-56px)] flex-col items-center justify-center">
      <div className="w-fit">
        <h1 className="text-5xl italic">Still Curious?</h1>
        <h1 className="mt-2 text-5xl font-semibold italic">
          Let&apos;s get in touch.
        </h1>
      </div>
      <div className="mt-6 w-[375px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
