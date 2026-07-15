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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email } = form;
    if (!name || !email) {
      alert("Please fill in the required fields.");
      return;
    }
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
        alert(
          "Thanks for reaching out! I've received your message and will get back to you as soon as possible.",
        );
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      console.log("Form submission error:", error);
      alert(
        "Something went wrong. Please try again in a few minutes or email me directly.",
      );
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
          placeholder="Your name"
          required
          disabled={submitting}
        />

        <FormField
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          disabled={submitting}
        />
        <FormField
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone number (optional)"
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
          placeholder="Tell me about your project, opportunity, or how I can help."
          rows={9}
          disabled={submitting}
          className="border border-secondary-300 px-3 py-4 outline-none text-secondary-400 font-medium placeholder:text-secondary-400 bg-secondary-200 rounded-xl resize-none"
          aria-label="Your message"
        />

        <Button type="submit" className="py-4">
          {submitting ? "Sending..." : "Send Message"}
        </Button>

        <p className="text-xs md:text-sm text-primary-100 text-center">
          Usually replies within 24 hours.
        </p>
      </form>
    </ContainerWrapper>
  );
};

export default ContactForm;
