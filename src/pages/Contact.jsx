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

  // On form submit, run reCAPTCHA v3, then proceed (no server shown here)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the reCAPTCHA script is loaded
    if (!window.grecaptcha) {
      alert("reCAPTCHA not loaded yet. Please try again in a few seconds.");
      return;
    }

    try {
      // Execute reCAPTCHA v3
      const token = await window.grecaptcha.execute(
        "6LeUnuIqAAAAAKBJXf3Xyt0GVcfS6bmvEQa_fY9Z",
        { action: "submit" }
      );

      // For demonstration, we'll just log the token
      // In a real scenario, you would pass this token + formData
      // to your server or a form service (EmailJS, Formspree, etc.)
      console.log("reCAPTCHA v3 token:", token);

      // Clear form & show success message (no actual email sending here)
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("reCAPTCHA error:", err);
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