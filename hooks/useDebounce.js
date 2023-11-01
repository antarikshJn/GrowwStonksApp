import { useEffect, useState } from "react";

function useDebounce(value, milliseconds = 200) {
  const [query, setQuery] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(value);
    }, milliseconds);

    return () => clearTimeout(timeout);
  }, [value, milliseconds]);

  return query;
}

export default useDebounce;
