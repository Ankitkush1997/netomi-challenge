import React, { useState, useEffect } from "react";
import PokemonCard from "./components/pokemon-card/pokemon-card";
import Icon from "./components/icon/Icon";
import "./App.css";
import Spinner from "./components/spinner/Spinner";
const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page - 1) * 30}`
        );
        const data = await response.json();

        var all = [];
        for (var i = 0; i < data.results.length; i++) {
          let pokeDetails = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`
          ).then((data) => data.json());

          var obj = {
            name:
              pokeDetails.name.charAt(0).toUpperCase() +
              pokeDetails.name.slice(1),
            id: pokeDetails.id,
            types: pokeDetails.types,
            number: pokeDetails.id.toString().padStart(3, "0"),
            height: pokeDetails.height,
            weight: pokeDetails.weight,
            image:
              pokeDetails.sprites.versions["generation-v"]["black-white"]
                .animated.front_default,
          };
          all.push(obj);
        }

        setPokemonList(all);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonList();
    setLoading(false);
  }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
    setLoading(true);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    const filteredData = pokemonList.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.types.some((type) =>
          type.type.name.toLowerCase().includes(value.toLowerCase())
        )
    );
    setFilteredList(filteredData);
  };

  const handleSorting = (event) => {
    const {
      target: { value },
    } = event;
    switch (value) {
      case "Name":
        const sortByName = pokemonList.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        setFilteredList(sortByName);
        break;
      case "Weight":
        setFilteredList([...pokemonList].sort((a, b) => a.weight - b.weight));
        break;
      case "Height":
        setFilteredList([...pokemonList].sort((a, b) => a.height - b.height));
        break;
      default:
        return;
    }
  };

  return (
    <div className="container">
      <Icon navLogo />
      <div className="pokemon-container">
        <div className="input-select-container">
          <input placeholder="Search..." type="text" onChange={handleChange} />
          <select onChange={handleSorting} defaultValue="Select Type">
            <option value="Select Type" disabled>
              Select Type
            </option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
            <option value="Height">Height</option>
          </select>
        </div>
        <div className="arrow-container">
          <Icon leftArrow onClick={handlePrevPage} disabled={page === 1} />
          <Icon rightArrow onClick={handleNextPage} />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="pokemons-card-container">
            {(filteredList.length ? filteredList : pokemonList).map(
              (pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
