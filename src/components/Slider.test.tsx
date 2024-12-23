import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Slider from "./Slider";

test("Slider changes value when dragged", () => {
  render(<Slider min={0} max={50} step={5} />);
  const slider = screen.getByTestId("slider") as HTMLInputElement;
  const valueDisplay = screen.getByTestId("slider-value");

  expect(valueDisplay.textContent).toBe("0");

  fireEvent.change(slider, { target: { value: "25" } });

  expect(valueDisplay.textContent).toBe("25");
});
