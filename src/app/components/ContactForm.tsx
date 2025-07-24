"use client";
import React, { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import FormField from "./UI/FormField";
import Button from "./UI/Button";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send this to API or email logic
    console.log(form);
  };

  return (
    <ContainerWrapper className="flex-col gap-3">
      <label htmlFor="contactForm" className=" text-[32px] font-extrabold">
        Let&apos;s <span className="text-primary-100">Connect</span>
      </label>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 flex-col"
        name="contactForm"
      >
        {/* <div className="flex flex-col gap-3 w-2/5"> */}
        <FormField
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        <FormField
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email id"
        />
        {/* </div> */}

        {/* <div className="flex flex-col gap-3 w-3/5"> */}
        <FormField
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Anything you want to say.."
        />
        <div className="flex gap-3">
          <FormField
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />

          <Button type="submit" width="w-1/3">
            Send
          </Button>
          {/* </div> */}
        </div>
      </form>
    </ContainerWrapper>
  );
};

export default ContactForm;
