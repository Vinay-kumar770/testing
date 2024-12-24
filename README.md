# React Components with Jest Testing

This repository contains **React components** implemented with **TypeScript**, along with their corresponding **Jest test cases**. These components demonstrate the proper usage of key HTML elements, attributes, and testing practices.

---

## Components Overview

This project includes the following components:

- **Accordion Component**: Organizes content into collapsible sections.
- **DataTable Component**: Displays data in a tabular format.
- **Dropdown Component**: Provides a list of selectable options.
- **FileUploader Component**: Allows users to upload files with type validation.
- **Form Component**: Captures user input using labeled fields.
- **Modal Component**: Represents a dialog box that can be opened and closed.
- **ModalForm Component**: Combines a modal with a form inside it.
- **Pagination Component**: Handles navigation across pages of content.
- **SearchBar Component**: Allows users to input search queries.
- **Slider Component**: Lets users select a value within a range.
- **TagInput Component**: Allows users to create and manage tags dynamically.

---

## How to Install Modules

To install the required dependencies, run the following command:

```bash
npm install
```

---
## How to Run the Project

To start the project locally, use the following command:

```bash
npm start
```

---
## How to Run Tests

To execute all Jest test cases, run:

```bash
npx jest
```

---

## How to Check Code Coverage

To generate a code coverage report, use the following command:

```bash
npx jest --silent --coverage
```

---
## Components Overview

### 1. **Accordion Component**
The `Accordion` component organizes content into collapsible sections.

#### Features:
- Uses `<section>`, `<header>`, and `<button>` for structure.
- Includes `aria-expanded` attributes for accessibility.
- Supports `toggleAccordion` function to open and close sections.

#### Testing:
The Jest tests validate:
- Toggling of accordion sections.
- Proper rendering of content when a section is expanded.

---

### 2. **DataTable Component**
The `DataTable` component displays data in a tabular format.

#### Features:
- Uses `<table>`, `<thead>`, `<tbody>`, and `<tr>` elements for structure.
- Dynamically renders rows and columns based on provided data.
- Allows custom column names and formatting.

#### Testing:
The Jest tests validate:
- Proper rendering of rows and columns.
- Display of correct data values.

---

### 3. **Dropdown Component**
The `Dropdown` component provides a list of selectable options.

#### Features:
- Uses `<select>` and `<option>` elements.
- Supports dynamic option rendering.
- Tracks the selected value for submission or further use.

#### Testing:
The Jest tests validate:
- Rendering of options in the dropdown.
- Correct tracking of the selected option.

---

### 4. **FileUploader Component**
The `FileUploader` component allows users to upload files.

#### Features:
- Supports file type validation through the `allowedTypes` prop.
- Displays selected file name.
- Handles errors for unsupported file types.

#### Testing:
The Jest tests validate:
- Proper handling of valid and invalid file uploads.
- Correct display of selected file names and error messages.

---

### 5. **Form Component**
The `Form` component captures user input using labeled fields.

#### Features:
- Includes `<label>`, `<input>`, and `<button>` elements.
- Uses `name`, `id`, and `aria-required` attributes for form controls.
- Submits data using the `onSubmit` function.

#### Testing:
The Jest tests validate:
- User input in form fields.
- Proper submission of form data.

---

### 6. **Modal Component**
The `Modal` component represents a dialog box that can be opened and closed by user interaction.

#### Features:
- Contains `<header>`, `<main>`, and `<footer>` sections.
- Includes accessible attributes like `aria-label` and `role="dialog"`.
- Supports `toggleModal` function for opening and closing.

#### Testing:
The Jest tests validate:
- Modal visibility when toggled.
- Button interactions to close the modal.

---

### 7. **ModalForm Component**
The `ModalForm` component combines a modal with a form inside it.

#### Features:
- Integrates features of both the `Modal` and `Form` components.
- Captures user input and allows form submission within a modal dialog.

#### Testing:
The Jest tests validate:
- Modal opening and closing functionality.
- Form input capture and submission within the modal.

---

### 8. **Pagination Component**
The `Pagination` component handles navigation across pages of content.

#### Features:
- Provides "Previous" and "Next" buttons for page navigation.
- Displays the current page and total page count.
- Supports customizable page change handlers.

#### Testing:
The Jest tests validate:
- Navigation between pages.
- Proper updates to the current page display.

---

### 9. **SearchBar Component**
The `SearchBar` component allows users to input search queries.

#### Features:
- Includes a text input and a submit button.
- Triggers a callback function when the search is submitted.
- Tracks user input dynamically.

#### Testing:
The Jest tests validate:
- Correct handling of user input.
- Proper submission of the search query.

---

### 10. **Slider Component**
The `Slider` component allows users to select a value within a range.

#### Features:
- Uses an `<input>` element of type `range`.
- Supports customizable minimum, maximum, and step values.
- Dynamically updates and displays the selected value.

#### Testing:
The Jest tests validate:
- Correct updating of the slider value.
- Dynamic range and step configuration.

---

### 11. **TagInput Component**
The `TagInput` component allows users to create and manage tags dynamically.

#### Features:
- Uses text input for adding tags.
- Provides buttons to remove individual tags.
- Tracks all tags as an array for further use.

#### Testing:
The Jest tests validate:
- Adding and removing tags.
- Proper tracking of tags as an array.

---
