import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TagInput from "./TagInput";

test("TagInput allows adding and removing tags", () => {
  const onTagsChangeMock = jest.fn();
  const initialTags = ["InitialTag"];

  render(<TagInput tagsData={initialTags} onTagsChange={onTagsChangeMock} />);

  const input = screen.getByTestId("tag-input");

  // Verify initial tags are rendered
  const tags = screen.getByTestId("tags");
  expect(tags).toHaveTextContent("InitialTag");

  // Add new tags
  fireEvent.change(input, { target: { value: "React" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  fireEvent.change(input, { target: { value: "TypeScript" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  // Verify new tags were added
  expect(tags).toHaveTextContent("React");
  expect(tags).toHaveTextContent("TypeScript");
  expect(onTagsChangeMock).toHaveBeenCalledWith(["InitialTag", "React"]);
  expect(onTagsChangeMock).toHaveBeenCalledWith([
    "InitialTag",
    "React",
    "TypeScript",
  ]);

  // Remove the first tag ('InitialTag')
  const removeButton = screen
    .getByTestId("tag-0") // Locate the first tag
    .querySelector("button"); // Find the button within that tag

  if (removeButton) fireEvent.click(removeButton);

  // Verify the tag was removed
  expect(tags).not.toHaveTextContent("InitialTag");
  expect(onTagsChangeMock).toHaveBeenCalledWith(["React", "TypeScript"]);

  // Test Backspace key behavior
  fireEvent.keyDown(input, { key: "Backspace", code: "Backspace" });
  expect(onTagsChangeMock).toHaveBeenCalledWith(["React"]);

  // Test no action on empty input with Backspace
  fireEvent.keyDown(input, { key: "Backspace", code: "Backspace" });
  expect(onTagsChangeMock).toHaveBeenCalledWith([]);
});
