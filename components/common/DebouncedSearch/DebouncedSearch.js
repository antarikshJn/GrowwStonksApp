import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

import PropertyControlledComponent from "@/components/common/PropertyControlledComponent";
import useDebounce from "@/hooks/useDebounce";
import TickerSearchReader from "@/readers/TickerSearch.reader";

import styles from "./DebouncedSearch.module.css";

const DebouncedSearch = ({
  delay,
  onChange,
  onSelect,
  options,
  placeholder,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();
  const debouncedQuery = useDebounce(query, delay);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [containerRef]);

  useEffect(() => {
    setIsOpen(true);
    onChange(debouncedQuery);
  }, [debouncedQuery]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelect = useCallback(
    (suggestion) => () => {
      onSelect(TickerSearchReader.symbol(suggestion));
    },
    []
  );

  return (
    <div className={styles.searchContainer} ref={containerRef}>
      <div className={styles.inputContainer}>
        <FaSearch color=" #c7c8ce" size="16px" />
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={query}
          className={styles.input}
        ></input>
      </div>
      <PropertyControlledComponent
        controllerProperty={isOpen && options?.length > 0}
      >
        {options?.length > 0 && (
          <ul className={styles.suggestionsDropdown}>
            {options?.map((suggestion) => (
              <li key={suggestion} onClick={handleSelect(suggestion)}>
                {TickerSearchReader.name(suggestion)}
              </li>
            ))}
          </ul>
        )}
      </PropertyControlledComponent>
    </div>
  );
};

DebouncedSearch.propTypes = {
  delay: PropTypes.number,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

DebouncedSearch.defaultProps = {
  delay: 200,
  onChange: () => {},
  onSelect: () => {},
  options: [],
  placeholder: "Search...",
};

export default DebouncedSearch;
