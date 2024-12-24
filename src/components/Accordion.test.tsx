import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

test("Accordion toggles sections correctly", () => {
  const toggleAccordionMock = jest.fn();
  const sections = [
    { id: "1", title: "Section 1", content: "Content 1" },
    { id: "2", title: "Section 2", content: "Content 2" },
  ];

  render(
    <Accordion sections={sections} toggleAccordion={toggleAccordionMock} />
  );

  const section1Button = screen.getByTestId("accordion-button-1");
  const section2Button = screen.getByTestId("accordion-button-2");

  // Section 1 content should not be visible initially
  expect(screen.queryByTestId("accordion-content-1")).not.toBeInTheDocument();

  // Toggle section 1
  fireEvent.click(section1Button);
  expect(screen.getByTestId("accordion-content-1")).toBeInTheDocument();
  expect(toggleAccordionMock).toHaveBeenCalledWith("1");

  // Toggle section 2
  fireEvent.click(section2Button);
  expect(screen.getByTestId("accordion-content-2")).toBeInTheDocument();
  expect(toggleAccordionMock).toHaveBeenCalledWith("2");
});
