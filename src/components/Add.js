import React from "react";
import axios from "axios";
import ResultCard from "./ResultCard";
import { DebounceInput } from "react-debounce-input";

const Add = () => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    const fetchResponse = async () => {
      try {
        const { data } = await axios.get(
          `https://imdb-api.com/API/Search/k_5t6rip1r/${search}`
        );
        const { results } = await data;
        setResults(results);
      } catch (error) {
        console.error(error.message);
        setResults([]);
      }
    };

    fetchResponse();
  }, [search]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <DebounceInput
              type="search"
              placeholder="Search for a movie"
              debounceTimeout={1000}
              value={search}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard {...movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
