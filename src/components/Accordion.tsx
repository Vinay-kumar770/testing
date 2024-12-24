import React, { useState } from "react";

interface AccordionProps {
  sections: { id: string; title: string; content: string }[];
  toggleAccordion: (sectionId: string) => void;
}

const Accordion: React.FC<AccordionProps> = ({ sections, toggleAccordion }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    const newSection = openSection === id ? null : id;
    setOpenSection(newSection);
    toggleAccordion(id);
  };

  return (
    <div id="accordion-container" data-testid="accordion">
      {sections.map((section) => (
        <section
          id={`accordion-section-${section.id}`}
          key={section.id}
          aria-labelledby={`accordion-button-${section.id}`}
        >
          <header>
            <button
              id={`accordion-button-${section.id}`}
              data-testid={`accordion-button-${section.id}`}
              aria-expanded={openSection === section.id}
              onClick={() => handleToggle(section.id)}
            >
              {section.title}
            </button>
          </header>
          {openSection === section.id && (
            <div
              id={`accordion-content-${section.id}`}
              role="region"
              data-testid={`accordion-content-${section.id}`}
            >
              {section.content}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Accordion;
