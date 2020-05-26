import React from "react";
import PokedexContainer from "./pokedex-style";
import Heading1 from "../../components/headings/regular/heading-1";
import Heading3 from "../../components/headings/regular/heading-3";

const Pokedex: React.FC = (props) => {
  return (
    <PokedexContainer>
      <section className="pokedex-title-section">
        <div className="pokedex-title-wrapper">
          <Heading1 className="pokedex-title">
            <h1>Pokemon List</h1>
          </Heading1>

          <Heading3 className="pokedex-subtitle">
            <p>Not beauty but powerful creatures</p>
          </Heading3>
        </div>
      </section>

      <section className="pokedex-content">{props.children}</section>
    </PokedexContainer>
  );
};

export default Pokedex;
