import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TagInput from "./TagInput";

test("TagInput allows adding and removing tags", () => {
  const onTagsChangeMock = jest.fn();
  render(<TagInput onTagsChange={onTagsChangeMock} />);

  const input = screen.getByTestId("tag-input");

  // Add tags
  fireEvent.change(input, { target: { value: "React" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  fireEvent.change(input, { target: { value: "TypeScript" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  // Verify tags were added
  const tags = screen.getByTestId("tags");
  expect(tags).toHaveTextContent("React");
  expect(tags).toHaveTextContent("TypeScript");
  expect(onTagsChangeMock).toHaveBeenCalledWith(["React", "TypeScript"]);

  // Remove a specific tag (e.g., 'React')
  const removeButton = screen
    .getByTestId("tag-0") // Locate the first tag
    .querySelector("button"); // Find the button within that tag

  if (removeButton) fireEvent.click(removeButton);

  // Verify the tag was removed
  expect(tags).not.toHaveTextContent("React");
  expect(onTagsChangeMock).toHaveBeenCalledWith(["TypeScript"]);
});
