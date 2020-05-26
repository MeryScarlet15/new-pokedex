import styled, { css } from "styled-components";
import { TMainButtonHeight, TMainButton, TMainButtonState } from "./main-button";
import { colors } from "../../../assets/colors/colors";

interface Props {
  type: TMainButton;
  height: TMainButtonHeight;
  state: TMainButtonState;
}

const getMainButtonHeight = (heightType: TMainButtonHeight): string => {
  switch (heightType) {
    case "large":
      return "48px";
      break;
    case "small":
      return "20px";
      break;
    case "medium":
    default:
      return "40px";
  }
};

const getMainButtonState = (state: TMainButtonState): string => {
  switch (state) {
    case "normal":
      return colors.primary;
    case "success":
      return colors.accent;
    case "error":
      return colors.error;
  }
};

const TypePrimaryMainButton = (state: TMainButtonState) => css`
  background: ${getMainButtonState(state)};
  border: 1px solid ${getMainButtonState(state)};

  .main-button-text {
    color: ${colors.white};
  }
`;
const TypeSecondaryMainButton = (state: TMainButtonState) => css`
  border: 1px solid ${getMainButtonState(state)};
  background: ${colors.white};

  .main-button-text {
    color: ${getMainButtonState(state)};
  }
`;

const getMainButtonType = (type: TMainButton, state: TMainButtonState) => {
  switch (type) {
    case "primary":
      return TypePrimaryMainButton(state);
    case "secondary":
      return TypeSecondaryMainButton(state);
  }
};

const MainButtonContainer = styled.div<Props>`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => getMainButtonHeight(props.height)};
  border-radius: 8px;
  ${(props) => getMainButtonType(props.type, props.state)}

  &:focus {
    opacity: 0.9;
  }
`;

export default MainButtonContainer;
