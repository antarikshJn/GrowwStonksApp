import { useSearchCompaniesQuery } from "@/features/services/searchApi";
import React, { useCallback, useEffect, useState } from "react";
import DebouncedSearch from "../common/DebouncedSearch";
import { useRouter } from "next/router";

const isValidQuery = (query) => !query || query?.length === 0;

const DEBOUNCE_DELAY = 300;

const AutoSuggest = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const { data } = useSearchCompaniesQuery(query, {
    skip: isValidQuery(query),
  });
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => setSuggestions(data), [data]);

  const onSelect = useCallback((value) => {
    setSuggestions([]);
    router.push({
      pathname: "/product/[pid]",
      query: { pid: value },
    });
  }, []);

  return (
    <DebouncedSearch
      options={suggestions}
      onChange={setQuery}
      onSelect={onSelect}
      delay={DEBOUNCE_DELAY}
      placeholder="Search Stocks & etfs"
    />
  );
};

export default AutoSuggest;
