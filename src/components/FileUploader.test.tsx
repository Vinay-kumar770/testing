import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FileUploader from "./FileUploader";

test("FileUploader allows file selection and validates type", () => {
  const onFileSelectMock = jest.fn();
  render(
    <FileUploader
      onFileSelect={onFileSelectMock}
      allowedTypes={["image/png"]}
    />
  );

  const fileInput = screen.getByTestId("file-input");

  // Invalid file type
  const invalidFile = new File(["dummy content"], "test.txt", {
    type: "text/plain",
  });
  fireEvent.change(fileInput, { target: { files: [invalidFile] } });

  expect(screen.getByTestId("error-message")).toHaveTextContent(
    "File type not allowed"
  );
  expect(onFileSelectMock).not.toHaveBeenCalled();

  // Valid file type
  const validFile = new File(["dummy content"], "test.png", {
    type: "image/png",
  });
  fireEvent.change(fileInput, { target: { files: [validFile] } });

  expect(screen.getByTestId("file-name")).toHaveTextContent(
    "Selected: test.png"
  );
  expect(onFileSelectMock).toHaveBeenCalledWith(validFile);
});
