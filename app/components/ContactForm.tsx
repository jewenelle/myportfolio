// components/ContactForm.js

"use client";
import { NextRequest, NextResponse } from "next/server";
import { useState, FormEvent } from "react";
import { Icons } from "next/dist/lib/metadata/types/metadata-types";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application.json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("email succesfully sent");
      } else {
        console.log("failed to send email");
      }
    } catch (error) {
      console.error("error sending email", error);
    }
  };

  return (
    <div className="container">
      <div className="contact max-w-lg mx-auto flex justify-between mt-5 w-full p-1 bg-slate-900 text-white">
        <h5 className="text-xs font-roboto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-3 h-3 inline-block"
          >
            <path d="M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-3.223-.716a1.5 1.5 0 00-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 01-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 001.052-1.767l-.716-3.223A1.5 1.5 0 004.648 2H3.5zM16.5 4.56l-3.22 3.22a.75.75 0 11-1.06-1.06l3.22-3.22h-2.69a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V4.56z" />
          </svg>
          +639653619970
        </h5>
        <h5 className="text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 inline-block"
          >
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
          </svg>
          JEWENELLEARCHIDE@GMAIL.COM
        </h5>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-10"
      >
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
