import styled from "styled-components/macro";
import { colors } from "../../../assets/colors/colors";

const CardPokemonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-radius: 100%;
  padding: 16px;
  height: 150px;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  .card-pokemon-sprite {
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 100%;
  }
`;

export default CardPokemonContainer;
