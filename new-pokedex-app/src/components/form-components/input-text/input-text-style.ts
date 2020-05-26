import styled from "styled-components";
import { colors } from "../../../assets/colors/colors";

const InputTextContainer = styled.div`
  width: 100%;

  .input-text-wrapper {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;

    .input-text-icon-left {
      width: 16px;
      height: 16px;
      min-width: 16px;
      min-height: 16px;
      max-width: 16px;
      max-height: 16px;
      margin-right: 16px;
    }

    .input-text-container {
      width: 100%;
      cursor: text;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
    .input-text-label {
      color: ${colors.gray};
      width: 100%;
    }
    .input-text {
      width: 100%;
      height: 100%;
      color: ${colors.black};
      border-bottom: 1px solid ${colors.secondary};

      input {
        width: 100%;
        height: 100%;
        font-size: 16px;
        line-height: 24px;
        ${colors.gray};
      }
    }
    .input-text-icon-right {
      width: 16px;
      height: 16px;
      min-width: 16px;
      min-height: 16px;
      max-width: 16px;
      max-height: 16px;
      margin-left: 16px;
    }
  }
  .input-text-error {
    width: 100%;
    padding-left: 16px;
    margin-top: 8px;
    color: ${colors.error};
  }
  &.disabled {
    .input-text-wrapper {
      .input-text-container {
        cursor: auto;
      }
      .input-text-label {
        color: ${colors.secondary};
      }
      .input-text {
        color: ${colors.secondary};
        input {
          color: ${colors.secondary};
        }
      }
    }
  }
  &.error {
    .input-text-wrapper {
      .input-text {
        border-bottom: 1px solid ${colors.error};
      }
      .input-text-icon-left {
        svg {
          rect {
            fill: ${colors.error};
          }
          path {
            fill: ${colors.error};
          }
        }
      }
      .input-text-icon-right {
        svg {
          rect {
            fill: ${colors.error};
          }
          path {
            fill: ${colors.error};
          }
        }
      }
    }
  }
`;

export default InputTextContainer;
