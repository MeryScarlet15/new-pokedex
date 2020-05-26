import React, { useState } from "react";
import MainButtonContainer from "./main-button-style";
import Svg from "../../svg/svg";
import Text from "../../headings/regular/text";

export type TMainButton = "primary" | "secondary";

export type TMainButtonHeight = "large" | "medium" | "small";

export type TMainButtonState = "normal" | "success" | "error";

interface MainButtonProps {
  id?: string;
  className?: string;
  type?: TMainButton;
  height?: TMainButtonHeight;
  state?: TMainButtonState;
  onClick: () => void;
  title: string;
  icon?: {
    left?: string;
    right?: string;
  };
  tabIndex?: number;
}

const useArias = () => {
  const [ariaPressed, setAriaPressed] = useState<boolean>(false);

  const changeAriaPressed = (newValue: boolean) => {
    setAriaPressed(newValue);
  };
  return {
    ariaPressed,
    changeAriaPressed,
  };
};

const MainButton: React.FC<MainButtonProps> = (props: MainButtonProps) => {
  const { type, height, state, onClick, title, icon, tabIndex } = props;
  const { ariaPressed, changeAriaPressed } = useArias();

  return (
    <MainButtonContainer
      type={type || "primary"}
      state={state || "normal"}
      height={height || "medium"}
      className="main-button"
      role="button"
      aria-pressed={ariaPressed}
      onClick={() => onClick()}
      onKeyDown={() => onClick()}
      tabIndex={tabIndex || 0}
    >
      {icon?.left && (
        <div className="main-button-icon-left">
          <Svg src={icon.left} />
        </div>
      )}

      <Text className="main-button-text">
        <p>{title}</p>
      </Text>

      {icon?.right && (
        <div className="main-button-icon-left">
          <Svg src={icon.right} />
        </div>
      )}
    </MainButtonContainer>
  );
};

export default MainButton;
