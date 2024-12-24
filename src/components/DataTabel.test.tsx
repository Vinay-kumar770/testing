import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "./DataTable";

test("DataTable displays data correctly", () => {
  const columns = ["Name", "Age", "Country"];
  const data = [
    { Name: "Alice", Age: 25, Country: "USA" },
    { Name: "Bob", Age: 30, Country: "Canada" },
  ];

  render(<DataTable data={data} columns={columns} />);

  const table = screen.getByTestId("data-table");

  expect(table).toHaveTextContent("Name");
  expect(table).toHaveTextContent("Age");
  expect(table).toHaveTextContent("Country");

  expect(table).toHaveTextContent("Alice");
  expect(table).toHaveTextContent("25");
  expect(table).toHaveTextContent("USA");

  expect(table).toHaveTextContent("Bob");
  expect(table).toHaveTextContent("30");
  expect(table).toHaveTextContent("Canada");
});
