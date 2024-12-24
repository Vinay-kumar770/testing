import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrev = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

  return (
    <div>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        data-testid="prev-button"
      >
        Previous
      </button>
      <span data-testid="page-indicator">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        data-testid="next-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
