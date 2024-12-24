import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalForm from "./ModalForm";

test("ModalForm handles user input correctly", () => {
  const onCloseMock = jest.fn();
  render(<ModalForm isOpen={true} onClose={onCloseMock} />);

  const nameInput = screen.getByTestId("input-name") as HTMLInputElement;
  const emailInput = screen.getByTestId("input-email") as HTMLInputElement;
  const submitButton = screen.getByTestId("submit-button");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });

  expect(nameInput.value).toBe("John Doe");
  expect(emailInput.value).toBe("john@example.com");

  fireEvent.click(submitButton);

  expect(onCloseMock).not.toHaveBeenCalled();
});
