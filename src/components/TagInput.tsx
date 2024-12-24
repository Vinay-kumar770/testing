import React, { useState } from "react";

interface TagInputProps {
  onTagsChange: (tags: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ onTagsChange }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      onTagsChange([...tags, inputValue.trim()]);
      setInputValue("");
    } else if (e.key === "Backspace" && !inputValue && tags.length) {
      const newTags = tags.slice(0, -1);
      setTags(newTags);
      onTagsChange(newTags);
    }
  };

  const handleRemoveTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    onTagsChange(newTags);
  };

  return (
    <div>
      <div data-testid="tags">
        {tags.map((tag, index) => (
          <span key={index} data-testid={`tag-${index}`}>
            {tag} <button onClick={() => handleRemoveTag(index)}>x</button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a tag"
        data-testid="tag-input"
      />
    </div>
  );
};

export default TagInput;
