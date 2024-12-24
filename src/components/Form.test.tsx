import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("Form captures user input and submits correctly", () => {
  const onSubmitMock = jest.fn();
  render(<Form onSubmit={onSubmitMock} />);

  const nameInput = screen.getByTestId("name-input");
  const emailInput = screen.getByTestId("email-input");
  const submitButton = screen.getByTestId("submit-button");

  // Fill out the form
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });

  // Submit the form
  fireEvent.click(submitButton);

  expect(onSubmitMock).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@example.com",
  });
});
