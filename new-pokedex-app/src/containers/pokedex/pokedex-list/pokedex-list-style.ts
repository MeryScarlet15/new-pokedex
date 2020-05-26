import styled from "styled-components";

const PokedexListContainer = styled.article`
  .pokedex-list-title {
    margin-bottom: 32px;
    width: 100%;
  }

  .pokemon-list {
    width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
  }

  .pokemon-filters {
    width: 100%;
    margin-bottom: 32px;
    display: flex;
    align-items: center;

    .pokemon-filter-input {
      margin-right: 16px;
    }

    .pokemon-filter-button {
      width: 234px;
    }
  }
`;

export default PokedexListContainer;
