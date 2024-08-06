import { useAtom } from 'jotai';
import { searchQueryAtom } from '../context/atoms';
import { useState } from 'react';

const SearchBar = () => {
  const [, setSearchQuery] = useAtom(searchQueryAtom);
  const [searchType, setSearchType] = useState('title');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery((prev) => ({
      ...prev,
      [searchType]: searchValue,
    }));
  };

  return (
    <form className="flex space-x-2" onSubmit={handleSearch}>
      <select
        name="searchType"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="select select-bordered select-primary"
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="category">Category</option>
      </select>
      <input
        type="text"
        name="searchValue"
        placeholder={`Search by ${searchType}`}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
};

export default SearchBar;

