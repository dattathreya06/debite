"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Phone, MapPin, Clock, AlertCircle, Check } from "lucide-react";
import Button from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormState {
  values: FormData;
  errors: Record<string, string>;
  status: "idle" | "submitting" | "success" | "error";
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState<FormState>({
    values: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
    errors: {},
    status: "idle",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
      errors: {
        ...prev.errors,
        [name]: "", // Clear error when user types
      },
    }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const { name, email, message } = formState.values;

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setFormState((prev) => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const sendEmail = async () => {
    try {
      setFormState((prev) => ({ ...prev, status: "submitting" }));

      // Call to your PHP script on the same server
      const response = await fetch("/process.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState.values),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send email");
      }

      setFormState((prev) => ({
        ...prev,
        status: "success",
        values: {
          name: "",
          email: "",
          company: "",
          message: "",
        },
      }));
    } catch (error) {
      console.error("Error sending email:", error);
      setFormState((prev) => ({ ...prev, status: "error" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail();
    }
  };

  return (
    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
      <div className="form-field">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.values.name}
          onChange={handleInputChange}
          className={`w-full p-3 bg-dark border ${
            formState.errors.name ? "border-red-500" : "border-dark-light"
          } rounded-md text-white focus:outline-none focus:border-accent`}
        />
        {formState.errors.name && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {formState.errors.name}
          </p>
        )}
      </div>

      <div className="form-field">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.values.email}
          onChange={handleInputChange}
          className={`w-full p-3 bg-dark border ${
            formState.errors.email ? "border-red-500" : "border-dark-light"
          } rounded-md text-white focus:outline-none focus:border-accent`}
        />
        {formState.errors.email && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {formState.errors.email}
          </p>
        )}
      </div>

      <div className="form-field">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formState.values.company}
          onChange={handleInputChange}
          className="w-full p-3 bg-dark border border-dark-light rounded-md text-white focus:outline-none focus:border-accent"
        />
      </div>

      <div className="form-field">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.values.message}
          onChange={handleInputChange}
          className={`w-full p-3 bg-dark border ${
            formState.errors.message ? "border-red-500" : "border-dark-light"
          } rounded-md text-white focus:outline-none focus:border-accent`}
          rows={5}
        />
        {formState.errors.message && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {formState.errors.message}
          </p>
        )}
      </div>

      {/* Status messages */}
      {formState.status === "error" && (
        <div className="p-4 bg-red-900/50 border border-red-500 rounded-md">
          <p className="text-red-500 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            There was an error sending your message. Please try again.
          </p>
        </div>
      )}

      {formState.status === "success" && (
        <div className="p-4 bg-green-900/50 border border-green-500 rounded-md">
          <p className="text-green-500 flex items-center">
            <Check className="w-5 h-5 mr-2" />
            Your message has been sent successfully!
          </p>
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={formState.status === "submitting"}
      >
        {formState.status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
