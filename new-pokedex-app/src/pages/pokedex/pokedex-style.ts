import styled from "styled-components";
import { colors } from "../../assets/colors/colors";

const PokedexContainer = styled.div`
  height: 100vh;
  padding: 64px;

  .pokedex-title-section {
    width: calc(50% - 64px);
    height: calc(100vh - 128px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 24px;
    position: fixed;
  }

  .pokedex-title-wrapper {
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    left: 32px;
    bottom: 32px;
    height: 100%;
    border-radius: 24px;
    padding: 24px;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pokedex-title {
    color: ${colors.white};
    margin-bottom: 24px;
  }

  .pokedex-subtitle {
    color: ${colors.white};
  }

  .pokedex-content {
    position: absolute;
    top: 64px;
    right: 64px;
    max-width: 600px;
    width: calc(50% - 100px);
    height: calc(100vh - 128px);
  }
`;

export default PokedexContainer;
