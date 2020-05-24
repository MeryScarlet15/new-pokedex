import styled from "styled-components";
import { colors } from "../../../assets/colors/colors";

const LoginContainer = styled.article`
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 64px;

  .login-title {
    margin-bottom: 24px;
  }

  .login-subtitle {
    margin-bottom: 48px;
  }

  .login-text {
    a {
      font-family: "roboto-medium";
      color: ${colors.primary};
    }
  }

  .login-form {
    width: 100%;

    .login-form-input {
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 32px;
      }
    }
  }
`;

export default LoginContainer;
