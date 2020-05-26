import React, { useEffect, useState } from "react";
import PokedexListContainer from "./pokedex-list-style";
import { getPokemonRequest } from "../../../services/get-pokemon-request";
import CardPokemon from "../../../components/cards/card-pokemon/card-pokemon";
import Heading1 from "../../../components/headings/regular/heading-1";
import InputText from "../../../components/form-components/input-text/input-text";
import MainButton from "../../../components/buttons/main-button/main-button";

const usePokemonList = () => {
  const [pokedex, setPokedex] = useState([]);

  const [newPokemonList, setNewPokemonList] = useState([]);

  const [pokemonLength, setPokemonLength] = useState<string>("");

  useEffect(() => {
    getPokemonRequest().then((response: any) => {
      const pokemonList = response.data.data.getPokemon;
      setPokedex(pokemonList);
      setNewPokemonList(pokemonList);
    });
  }, []);

  const filterPokemon = () => {
    const pokemonListAux = [...pokedex].slice(0, Number(pokemonLength));

    setNewPokemonList([...pokemonListAux]);
  };

  const changePokemonLegth = (newLength: string) => {
    setPokemonLength(newLength);
  };

  return {
    pokedex,
    newPokemonList,
    changePokemonLegth,
    filterPokemon,
  };
};

const PokedexList: React.FC = () => {
  const { pokedex, newPokemonList, changePokemonLegth, filterPokemon } = usePokemonList();

  return (
    <PokedexListContainer>
      <Heading1 className="pokedex-list-title">
        <h2>Pokemon sprites</h2>
      </Heading1>
      <div className="pokemon-filters">
        <div className="pokemon-filter-input">
          <InputText
            id="pokemon-filter-input"
            label="¿How many pokemon do you want to see?"
            events={{
              onChange: (event) => changePokemonLegth(event.target.value),
            }}
          />
        </div>

        <div className="pokemon-filter-button">
          <MainButton title="Filter" height="medium" state="success" onClick={() => filterPokemon()} />
        </div>
      </div>
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
