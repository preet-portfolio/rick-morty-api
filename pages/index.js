import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./components/Filter/Filter";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;

  useEffect(() => {
    const fetchCharacters = async () => {
      const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    };

    fetchCharacters();
  }, [pageNumber, search, status, gender, species]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        I'm Not a Robot, Goddammit Morty,
        <span className="text-primary">I'm a API!</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filter
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
          />

          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;

// Dynamically load Bootstrap JS only on the client-side
if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}
