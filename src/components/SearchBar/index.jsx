import { useState } from 'react';

const SearchBar = ({ setUserList }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const filteredData = parsedData.filter(
        (data) => data.username === searchTerm
      );
      setUserList(filteredData);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
