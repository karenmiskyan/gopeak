import React, {useState} from 'react';
import { IconSearch } from "shared/icons/common-icons";

interface SearchInputProps {
  name: string;
  placeholder: string;
  onSearchResult: (result: string) => void;
}

const SearchInput = ({name, placeholder, onSearchResult}:SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.trim());
  };
  const handleSearch = () => {
    onSearchResult(searchTerm);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      onSearchResult(searchTerm);
    }
  };
  
  return (
    <div className="h-54-px d-flex search-input">
      <input
        required
        type="text"
        name={name}
        onKeyDown={handleKeyPress}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="form-item h-100"
      />
      <span className="search-input-icon" onClick={handleSearch}>
        <IconSearch/>
      </span>
    </div>
  );
};

export default SearchInput;