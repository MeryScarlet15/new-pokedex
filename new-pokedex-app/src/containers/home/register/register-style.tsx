import styled from "styled-components";
import { colors } from "../../../assets/colors/colors";

const RegisterContainer = styled.article`
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 64px;

  .register-title {
    margin-bottom: 24px;
  }

  .register-subtitle {
    margin-bottom: 48px;
  }

  .register-text {
    a {
      font-family: "roboto-medium";
      color: ${colors.primary};
    }
  }

  .register-form {
    width: 100%;
    margin-bottom: 32px;

    .register-form-fields {
      margin-bottom: 40px;
      width: 100%;
    }

    .register-form-input {
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .button-submit-register-form {
      width: 100%;
    }

    .register-form-button {
      margin: 0 auto;
      width: 234px;
    }
  }
`;

export default RegisterContainer;
