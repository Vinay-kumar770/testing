import React, { useState } from "react";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  if (!isOpen) return null;

  return (
    <div data-testid="modal">
      <button onClick={onClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          data-testid="input-name"
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          data-testid="input-email"
        />
        <button type="submit" data-testid="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
