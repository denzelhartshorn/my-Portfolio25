// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // On form submit, clear the form & show success message (no reCAPTCHA)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate a form submission (this is where you'd integrate EmailJS, Formspree, etc.)
      console.log("Form Submitted:", formData);

      // Clear form & show success message
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("ERROR");
    }
  };

  return (
    <div className="container" style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2 className="text-start mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Message Field */}
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Send
        </button>

        {status === "SUCCESS" && (
          <div className="mt-3 text-success">Thank you! Your message was sent.</div>
        )}
        {status === "ERROR" && (
          <div className="mt-3 text-danger">Something went wrong. Please try again.</div>
        )}
      </form>
    </div>
  );
}