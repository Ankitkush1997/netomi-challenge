import React, { useState } from "react";
import "./pokemon-card.css";
import Icon from "../icon/Icon";

const PokemonCard = ({ pokemon }) => {
  const [like, setLike] = useState(false);

  const handleLike = (favPoke) => {
    const storedPokes = JSON.parse(localStorage.getItem("favPoke"));
    // if storedPokes having already that pokemon obj

    if (
      storedPokes &&
      storedPokes.some((type) =>
        type.name.toLowerCase().includes(favPoke.name.toLowerCase())
      )
    ) {
      const afterRemoveFromFav = storedPokes.filter(
        (pok) => pok.name !== pokemon.name
      );
      localStorage.setItem("favPoke", JSON.stringify(afterRemoveFromFav));
      setLike(!like);
    }
    // if storedPokes not having that pokemon obj
    else {
      const addToFav = storedPokes ? [...storedPokes, favPoke] : [favPoke];
      localStorage.setItem("favPoke", JSON.stringify(addToFav));
      setLike(!like);
    }
  };

  const isPokemonInFav = JSON.parse(localStorage.getItem("favPoke"))?.some(
    (poke) => poke.name.toLowerCase().includes(pokemon.name.toLowerCase())
  );

  return (
    <div className="colorfulShadow">
      <div>
        <p style={{ fontSize: "24px" }}>{pokemon?.name}</p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {pokemon.types.map(({ type }) => (
            <span className="pokemon-types">{type.name.toUpperCase()}</span>
          ))}
        </div>
        <p style={{ fontSize: "15px", fontWeight: "bold", marginTop: "10px" }}>
          Height: {pokemon?.height}
        </p>
        <p style={{ fontSize: "15px", fontWeight: "bold", marginTop: "5px" }}>
          Weight: {pokemon?.weight}
        </p>
        {!isPokemonInFav ? (
          <Icon heartOutline handleClick={() => handleLike(pokemon)} />
        ) : (
          <Icon heartFilled handleClick={() => handleLike(pokemon)} />
        )}
      </div>
      <img src={pokemon.image} alt={pokemon?.name} style={{ height: "80px" }} />
    </div>
  );
};

const MemoPokemon = React.memo(PokemonCard);

export default MemoPokemon;
