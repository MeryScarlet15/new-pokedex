import React from "react";
import LoginContainer from "./login-style";
import Heading2 from "../../../components/headings/regular/heading-2";
import Text from "../../../components/headings/regular/text";
import Heading1 from "../../../components/headings/regular/heading-1";
import InputText from "../../../components/form-components/input-text/input-text";

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <Heading1 className="login-title">
        <h2>Sign in</h2>
      </Heading1>

      <Text className="login-subtitle">
        <p>Complete the following fields to see the pokemon list</p>
      </Text>

      <form className="login-form">
        <div className="login-form-input">
          <InputText label="Email" />
        </div>

        <div className="login-form-input">
          <InputText label="password" />
        </div>
      </form>

      <Text className="login-text">
        <p>
          Don't have an Account? <a href="#">Sign up</a>
        </p>
      </Text>
    </LoginContainer>
  );
};

export default Login;
