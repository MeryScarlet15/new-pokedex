import React, { useState } from "react";
import InputTextContainer from "./input-text-style";
import Svg from "../../svg/svg";
import Label from "../../headings/regular/label";
import LabelMedium from "../../headings/medium/label-medium";

interface InputTextProps {
  label?: string;
  value?: string;
  errorText?: string;
  placeholder?: string;
  icon?: {
    left?: string;
    right?: string;
  };
  events?: {
    onChange?: (event: any) => void;
    onBlur?: (event: any) => void;
    onFocus?: (event?: any) => void;
  };
  disabled?: boolean;
}

// Manage only the value
const useInputValue = (initialValue: string) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  const changeInputValue = (newInputValue: string) => {
    setInputValue(newInputValue);
  };

  return {
    inputValue,
    changeInputValue,
  };
};

// Mix all the inputText customhooks + manage the events
const useInputText = (props: InputTextProps) => {
  const { value, events, disabled, label } = props;

  const { inputValue, changeInputValue } = useInputValue(value || "");

  const handleChange = (event: any) => {
    changeInputValue(event.target.value);

    if (events?.onChange) {
      events.onChange(event);
    }
  };

  const handleBlur = (event: any) => {
    changeInputValue(event.target.value);

    if (events?.onBlur) {
      events.onBlur(event);
    }
  };

  return {
    handleChange,
    handleBlur,
    inputValue,
  };
};

const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
  const { label, value, errorText, icon, events, disabled, placeholder } = props;
  const { handleChange, handleBlur, inputValue } = useInputText(props);

  return (
    <InputTextContainer className={`${disabled ? "disabled" : ""} ${errorText ? "error" : ""}`}>
      <div className="input-text-wrapper">
        {icon && icon.left && (
          <div className="input-text-icon-left">
            <Svg src={icon.left} />
          </div>
        )}

        <div className={`input-text-container`}>
          {label && (
            <LabelMedium className="input-text-label">
              <label>{label}</label>
            </LabelMedium>
          )}
          <div className="input-text">
            <input
              value={inputValue}
              disabled={disabled}
              onChange={(event: any) => handleChange(event)}
              onBlur={(event: any) => handleBlur(event)}
              placeholder={placeholder}
            />
          </div>
        </div>
        {icon && icon.right && (
          <div className="input-text-icon-right">
            <Svg src={icon.right} />
          </div>
        )}
      </div>

      {errorText && (
        <div className="input-text-error">
          <p>{errorText}</p>
        </div>
      )}
    </InputTextContainer>
  );
};

export default InputText;
