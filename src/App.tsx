import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import DataTable from "./components/DataTable";
import Dropdown from "./components/Dropdown";
import FileUploader from "./components/FileUploader";
import Form from "./components/Form";
import Modal from "./components/Modal";
import ModalForm from "./components/ModalForm";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Slider from "./components/Slider";
import TagInput from "./components/TagInput";

type TableColumn = string;

type AccordionSection = {
  id: string;
  title: string;
  content: string;
};

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tags, setTags] = useState<string[]>([]);

  const accordionSections: AccordionSection[] = [
    { id: "1", title: "Section 1", content: "Content for Section 1" },
    { id: "2", title: "Section 2", content: "Content for Section 2" },
  ];

  const tableData = [
    { name: "John", age: 30, country: "USA" },
    { name: "Alice", age: 25, country: "UK" },
  ];

  const tableColumns: TableColumn[] = ["name", "age", "country"];

  const dropdownOptions: string[] = ["Option 1", "Option 2", "Option 3"];

  const sliderMin = 0;
  const sliderMax = 100;

  return (
    <div className="app-container">
      <div className="component-wrapper">
        <Accordion
          sections={accordionSections}
          toggleAccordion={(id) => console.log(`Toggled section: ${id}`)}
        />
      </div>
      <div className="component-wrapper">
        <DataTable data={tableData} columns={tableColumns} />
      </div>
      <div className="component-wrapper">
        <Dropdown options={dropdownOptions} />
      </div>
      <div className="component-wrapper">
        <FileUploader onFileSelect={(file) => console.log(file.name)} />
      </div>
      <div className="component-wrapper">
        <Form onSubmit={(data) => console.log("Form Data: ", data)} />
      </div>
      <div className="component-wrapper">
        <Modal
          isOpen={modalOpen}
          toggleModal={() => setModalOpen(!modalOpen)}
        />
      </div>
      <div className="component-wrapper">
        <ModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <div className="component-wrapper">
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <div className="component-wrapper">
        <SearchBar
          onSearch={(query) => console.log(`Search Query: ${query}`)}
        />
      </div>
      <div className="component-wrapper">
        <Slider min={sliderMin} max={sliderMax} />
      </div>
      <div className="component-wrapper">
        <TagInput tagsData={tags} onTagsChange={(tags) => setTags(tags)} />
      </div>
    </div>
  );
};

export default App;
