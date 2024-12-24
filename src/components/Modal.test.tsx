import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

test("Modal opens and closes correctly", () => {
  const toggleModalMock = jest.fn();
  const { rerender } = render(
    <Modal isOpen={false} toggleModal={toggleModalMock} />
  );

  // Modal should not be in the document when closed
  expect(screen.queryByTestId("modal")).not.toBeInTheDocument();

  // Re-render with the modal open
  rerender(<Modal isOpen={true} toggleModal={toggleModalMock} />);
  expect(screen.getByTestId("modal")).toBeInTheDocument();

  // Close the modal
  const closeButton = screen.getByTestId("close-modal-button");
  fireEvent.click(closeButton);

  expect(toggleModalMock).toHaveBeenCalled();
});
