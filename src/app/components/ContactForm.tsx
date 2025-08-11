"use client";
import React, { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import FormField from "./UI/FormField";
import Button from "./UI/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ContactForm: React.FC = () => {
  const router = useRouter();
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
    <ContainerWrapper className="flex-col gap-5">
      <label
        htmlFor="contactForm"
        className=" text-[32px] font-extrabold flex justify-between items-center"
      >
        <span>
          Let&apos;s <span className="text-primary-100">Connect</span>
        </span>
        <Image
          src={"/icons/crossIcon.svg"}
          height={32}
          width={32}
          alt="Cross"
          className="hover:cursor-pointer"
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
        />
      </label>
      <form
        onSubmit={handleSubmit}
        className="flex gap-5 flex-col"
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
        <FormField
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your mobile number"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Anything you want to say.."
          rows={8}
          className="border border-secondary-300 px-3 py-4 outline-none text-secondary-400 font-medium placeholder:text-secondary-400 bg-secondary-200 rounded-xl resize-none"
        />

        <Button type="submit" className="py-4">
          Send
        </Button>
      </form>
    </ContainerWrapper>
  );
};

export default ContactForm;
