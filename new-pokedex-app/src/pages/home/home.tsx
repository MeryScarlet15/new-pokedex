import React from "react";
import HomeContainer from "./home-style";
import Heading1 from "../../components/headings/regular/heading-1";
import Heading3 from "../../components/headings/regular/heading-3";

const Home: React.FC = (props) => {
  return (
    <HomeContainer>
      <section className="home-title-section">
        <div className="home-title-wrapper">
          <Heading1 className="home-title">
            <h1>New Pokedex</h1>
          </Heading1>

          <Heading3 className="home-subtitle">
            <p>The best way to see the pokemon list</p>
          </Heading3>
        </div>
      </section>

      <section className="home-form">{props.children}</section>
    </HomeContainer>
  );
};

export default Home;
