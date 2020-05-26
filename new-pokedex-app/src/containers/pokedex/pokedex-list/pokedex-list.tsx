import React, { useEffect, useState } from "react";
import PokedexListContainer from "./pokedex-list-style";
import { getPokemonRequest } from "../../../services/get-pokemon-request";
import CardPokemon from "../../../components/cards/card-pokemon/card-pokemon";
import Heading1 from "../../../components/headings/regular/heading-1";
import InputText from "../../../components/form-components/input-text/input-text";
import MainButton from "../../../components/buttons/main-button/main-button";
import Text from "../../../components/headings/regular/text";

const usePokemonList = () => {
  const [pokedex, setPokedex] = useState([]);

  const [newPokemonList, setNewPokemonList] = useState([]);

  const [pokemonLength, setPokemonLength] = useState<string>("");

  const [pokemonLengthError, setPokemonLengthError] = useState<string>("");

  useEffect(() => {
    getPokemonRequest().then((response: any) => {
      const pokemonList = response.data.data.getPokemon;
      setPokedex(pokemonList);
      setNewPokemonList(pokemonList);
    });
  }, []);

  const changePokemonLegth = (newLength: string) => {
    if (newLength) {
      setPokemonLength(newLength);
      setPokemonLengthError("");
    } else {
      setPokemonLengthError("Required field");
    }
  };

  const filterPokemon = () => {
    if (pokemonLength) {
      const pokemonListAux = [...pokedex].slice(0, Number(pokemonLength));

      setNewPokemonList([...pokemonListAux]);
      setPokemonLengthError("");
    } else {
      setPokemonLengthError("Required field");
    }
  };

  return {
    pokedex,
    newPokemonList,
    changePokemonLegth,
    filterPokemon,
    pokemonLengthError,
  };
};

const PokedexList: React.FC = () => {
  const { pokedex, newPokemonList, changePokemonLegth, filterPokemon, pokemonLengthError } = usePokemonList();

  return (
    <PokedexListContainer>
      <Heading1 className="pokedex-list-title">
        <h2>{newPokemonList.length} pokemon sprites</h2>
      </Heading1>
      <form
        className="pokemon-filters"
        onSubmit={(event) => {
          event?.preventDefault();
          filterPokemon();
        }}
      >
        <div className="pokemon-filter-input">
          <InputText
            id="pokemon-filter-input"
            type="number"
            label="¿How many pokemon do you want to see?"
            errorText={pokemonLengthError}
            events={{
              onChange: (event) => changePokemonLegth(event.target.value),
            }}
          />
        </div>

        <div className="pokemon-filter-button">
          <MainButton title="Filter" height="medium" state="success" onClick={() => filterPokemon()} />
        </div>
      </form>

      <ul className="pokemon-list">
        {newPokemonList.length > 0 ? (
          newPokemonList.map((key: any) => (
            <li className="pokemon-card">
              <CardPokemon sprite={key.sprite} name={key.name} number={key.number} />
            </li>
          ))
        ) : (
          <li>
            <p>Cargando pokemon...</p>
          </li>
        )}
      </ul>
    </PokedexListContainer>
  );
};

export default PokedexList;
