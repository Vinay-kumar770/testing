import React, { useState } from "react";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  allowedTypes?: string[];
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileSelect,
  allowedTypes = [],
}) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (allowedTypes.length && !allowedTypes.includes(file.type)) {
        setError("File type not allowed");
        setFileName(null);
      } else {
        setError(null);
        setFileName(file.name);
        onFileSelect(file);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} data-testid="file-input" />
      {fileName && <p data-testid="file-name">Selected: {fileName}</p>}
      {error && (
        <p data-testid="error-message" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default FileUploader;
