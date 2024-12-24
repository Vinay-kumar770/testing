import React, { useState } from "react";

interface FormProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="user-form" onSubmit={handleSubmit} data-testid="form">
      <label htmlFor="name-input" data-testid="name-label">
        Name:
      </label>
      <input
        id="name-input"
        name="name"
        data-testid="name-input"
        value={formData.name}
        onChange={handleChange}
        aria-required="true"
      />

      <label htmlFor="email-input" data-testid="email-label">
        Email:
      </label>
      <input
        id="email-input"
        name="email"
        data-testid="email-input"
        value={formData.email}
        onChange={handleChange}
        aria-required="true"
      />

      <button id="submit-button" type="submit" data-testid="submit-button">
        Submit
      </button>
    </form>
  );
};

export default Form;
