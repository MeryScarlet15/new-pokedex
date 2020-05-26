import React from "react";
import CardPokemonContainer from "./card-pokemon-style";

interface CardPokemonProps {
  sprite: string;
  number: string;
  name: string;
}

const CardPokemon: React.FC<CardPokemonProps> = (props: CardPokemonProps) => {
  const { sprite, number, name } = props;

  return (
    <CardPokemonContainer>
      <div className="card-pokemon-sprite">
        <img src={sprite} alt="pokemon" />
      </div>
    </CardPokemonContainer>
  );
};

export default CardPokemon;
