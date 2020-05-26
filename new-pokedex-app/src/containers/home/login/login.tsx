import React from "react";
import LoginContainer from "./login-style";
import Heading2 from "../../../components/headings/regular/heading-2";
import Text from "../../../components/headings/regular/text";
import Heading1 from "../../../components/headings/regular/heading-1";
import InputText from "../../../components/form-components/input-text/input-text";
import MainButton from "../../../components/buttons/main-button/main-button";
import { IValidation, IFormValidations, ISubmitUseFormParams } from "../../../hooks/useForm/use-form-types";
import { RequiredValidation, EmailValidation } from "../../../hooks/useForm/use-form-validations";
import useForm from "../../../hooks/useForm/use-form";
import { Link } from "react-router-dom";
import { userAuthRequest } from "../../../services/user-auth-request";

interface LoginValuesType {
  email: string;
  password: string;
}

const requiredValidation: IValidation = RequiredValidation({
  errorText: "Required field",
});

const emailValidation: IValidation = EmailValidation({
  errorText: "El email es incorrecto",
});

const formValidations: IFormValidations<LoginValuesType> = {
  email: [requiredValidation, emailValidation],
  password: [requiredValidation],
};

const useLoginForm = () => {
  const initialValues: LoginValuesType = {
    email: "",
    password: "",
  };

  const submit = async (params: ISubmitUseFormParams<LoginValuesType>) => {
    const { email, password } = params.values;
    console.log("Entersito");

    const { values } = params;

    const requestData = {
      ...values,
    };

    const { data } = await userAuthRequest(requestData);

    if (!data.errors) {
      const token = data.data.userAuth.token;
      localStorage.setItem("token", token);
      window.location.reload();
    }
  };

  const formActions = useForm<LoginValuesType>({
    initialValues,
    formValidations,
    submit,
  });

  return {
    ...formActions,
  };
};

const Login: React.FC = () => {
  const formActions = useLoginForm();

  return (
    <LoginContainer>
      <Heading1 className="login-title">
        <h2>Sign in</h2>
      </Heading1>

      <Text className="login-subtitle">
        <p>Complete the following fields to see the pokemon list</p>
      </Text>

      <form
        id="login-form"
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          formActions.onSubmit();
        }}
      >
        <div className="login-form-fields">
          <div className="login-form-input">
            <InputText
              id="login-form-email"
              label="Email"
              events={{ onChange: (event: any) => formActions.handleFieldEvent(event.target.value, "email") }}
              errorText={formActions.errorValues.email.errorText}
            />
          </div>

          <div className="login-form-input">
            <InputText
              id="login-form-password"
              label="password"
              events={{ onChange: (event: any) => formActions.handleFieldEvent(event.target.value, "password") }}
              errorText={formActions.errorValues.password.errorText}
            />
          </div>
        </div>

        <div className="login-form-button">
          <button className="button-submit-login-form" form="login-form">
            <MainButton title="ENTER" height="large" onClick={() => formActions.onSubmit()} />
          </button>
        </div>
      </form>

      <Text className="login-text">
        <p>
          Don't have an Account?{" "}
          <Link to="/register">
            <a>Sign up</a>
          </Link>
        </p>
      </Text>
    </LoginContainer>
  );
};

export default Login;
