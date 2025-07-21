"use client";
import React, { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import Image from "next/image";
import Link from "next/link";

interface ContactFormProps {
  isExpanded?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = () => {
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
    <ContainerWrapper className="flex-col">
      <Link href={"/contact"}>
        <label
          htmlFor="contactForm"
          className="flex justify-between items-center"
        >
          <p>
            <span>Let&apos;s</span> Connect
          </p>
          <Image
            src={"/icons/rightArrow.svg"}
            height={24}
            width={24}
            alt="Arrow"
          />
        </label>
      </Link>
      <form onSubmit={handleSubmit} className="" name="contactForm">
        <div>
          <label htmlFor="name" className="block font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-semibold">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition"
        >
          Send Message
        </button>
      </form>
    </ContainerWrapper>
  );
};

export default ContactForm;
