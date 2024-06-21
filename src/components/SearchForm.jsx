import React from 'react';
import { useGlobalContext } from '../context';
import { FaSearch } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import '../form.css';

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function sanitizeInput(input) {
    // Remove any potentially harmful characters
    const cleanInput = DOMPurify.sanitize(input);
    // Optionally, you can add additional checks, e.g., only allow alphanumeric characters
    const regex = /^[a-zA-Z0-9 ]*$/;
    return regex.test(cleanInput) ? cleanInput : '';
  }

  function handleInputChange() {
    const cleanValue = sanitizeInput(searchValue.current.value);
    setSearchTerm(cleanValue);
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            placeholder="Search cocktails..."
            className="search-input"
            onChange={handleInputChange}
          />
          <button type="submit" className="search-btn">
            <FaSearch />
          </button>
        </div>
      </form>
    </section>
  );
}