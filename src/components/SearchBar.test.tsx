import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("SearchBar updates input and calls onSearch on submit", () => {
  const onSearchMock = jest.fn();
  render(<SearchBar onSearch={onSearchMock} />);

  const input = screen.getByTestId("search-input") as HTMLInputElement;
  const button = screen.getByTestId("search-button");

  fireEvent.change(input, { target: { value: "React" } });

  expect(input.value).toBe("React");

  fireEvent.click(button);

  expect(onSearchMock).toHaveBeenCalledWith("React");
});
