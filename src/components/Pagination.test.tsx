import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

test("Pagination works as expected", () => {
  const onPageChangeMock = jest.fn();

  render(
    <Pagination
      currentPage={2}
      totalPages={5}
      onPageChange={onPageChangeMock}
    />
  );

  const prevButton = screen.getByTestId("prev-button");
  const nextButton = screen.getByTestId("next-button");
  const pageIndicator = screen.getByTestId("page-indicator");

  expect(pageIndicator).toHaveTextContent("Page 2 of 5");

  fireEvent.click(prevButton);

  expect(onPageChangeMock).toHaveBeenCalledWith(1);

  fireEvent.click(nextButton);

  expect(onPageChangeMock).toHaveBeenCalledWith(3);
});
