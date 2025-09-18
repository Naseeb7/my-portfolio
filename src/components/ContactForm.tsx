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
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone } = form;
    if (!name || !email || !phone) console.log("Fill mandatory fields");
    try {
      setSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        alert("Message sent!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.log("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ContainerWrapper className="flex-col gap-5">
      <header className="text-[32px] font-extrabold flex justify-between items-center">
        <h1>
          Let&apos;s <span className="text-primary-100">Connect</span>
        </h1>
        <Image
          src={"/icons/crossIcon.svg"}
          height={32}
          width={32}
          alt="Close icon to return to homepage"
          className="hover:cursor-pointer"
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
        />
      </header>
      <form
        onSubmit={handleSubmit}
        className="flex gap-5 flex-col"
        name="contactForm"
        id="contactForm"
      >
        <FormField
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          disabled={submitting}
        />

        <FormField
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email id"
          required
          disabled={submitting}
        />
        <FormField
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          required
          disabled={submitting}
        />

        <label htmlFor="message" className="sr-only">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Anything you want to say.."
          rows={9}
          disabled={submitting}
          className="border border-secondary-300 px-3 py-4 outline-none text-secondary-400 font-medium placeholder:text-secondary-400 bg-secondary-200 rounded-xl resize-none"
          aria-label="Your message"
        />

        <Button type="submit" className="py-4">
          {submitting ? "Sending" : "Send"}
        </Button>
      </form>
    </ContainerWrapper>
  );
};

export default ContactForm;
