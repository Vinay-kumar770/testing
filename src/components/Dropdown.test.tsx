import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

test("Dropdown displays selected option", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  render(<Dropdown options={options} />);

  const dropdown = screen.getByTestId("dropdown") as HTMLSelectElement;
  const selectedValue = screen.getByTestId("selected-value");

  expect(selectedValue.textContent).toBe("Option 1");

  fireEvent.change(dropdown, { target: { value: "Option 2" } });

  expect(selectedValue.textContent).toBe("Option 2");
});
