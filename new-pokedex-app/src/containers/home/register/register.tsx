import React from "react";
import { IValidation, IFormValidations, ISubmitUseFormParams } from "../../../hooks/useForm/use-form-types";
import { RequiredValidation, EmailValidation } from "../../../hooks/useForm/use-form-validations";
import useForm from "../../../hooks/useForm/use-form";
import InputText from "../../../components/form-components/input-text/input-text";
import Text from "../../../components/headings/regular/text";
import Heading1 from "../../../components/headings/regular/heading-1";
import MainButton from "../../../components/buttons/main-button/main-button";
import RegisterContainer from "./register-style";
import { Link } from "react-router-dom";

interface RegisterValuesType {
  name: string;
  email: string;
  password: string;
}

const requiredValidation: IValidation = RequiredValidation({
  errorText: "Required field",
});

const emailValidation: IValidation = EmailValidation({
  errorText: "El email es incorrecto",
});

const formValidations: IFormValidations<RegisterValuesType> = {
  name: [requiredValidation],
  email: [requiredValidation, emailValidation],
  password: [requiredValidation],
};

const useRegisterForm = () => {
  const initialValues: RegisterValuesType = {
    name: "",
    email: "",
    password: "",
  };

  const submit = (params: ISubmitUseFormParams<RegisterValuesType>) => {
    const { email, password } = params.values;
    console.log("Entersito");
  };

  const formActions = useForm<RegisterValuesType>({
    initialValues,
    formValidations,
    submit,
  });

  return {
    ...formActions,
  };
};

const Register: React.FC = () => {
  const formActions = useRegisterForm();

  return (
    <RegisterContainer>
      <Heading1 className="register-title">
        <h2>Sign Up</h2>
      </Heading1>

      <Text className="register-subtitle">
        <p>Complete the following fields to see the pokemon list</p>
      </Text>

      <form
        id="register-form"
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          formActions.onSubmit();
        }}
      >
        <div className="register-form-fields">
          <div className="register-form-input">
            <InputText
              id="register-form-email"
              label="Name"
              events={{ onChange: (event: any) => formActions.handleFieldEvent(event.target.value, "name") }}
              errorText={formActions.errorValues.name.errorText}
            />
          </div>

          <div className="register-form-input">
            <InputText
              id="register-form-password"
              label="Email"
              events={{ onChange: (event: any) => formActions.handleFieldEvent(event.target.value, "email") }}
              errorText={formActions.errorValues.email.errorText}
            />
          </div>

          <div className="register-form-input">
            <InputText
              id="register-form-password"
              label="password"
              events={{ onChange: (event: any) => formActions.handleFieldEvent(event.target.value, "password") }}
              errorText={formActions.errorValues.password.errorText}
            />
          </div>
        </div>

        <div className="register-form-button">
          <button className="button-submit-register-form" form="register-form">
            <MainButton title="REGISTER" state="success" height="large" onClick={() => formActions.onSubmit()} />
          </button>
        </div>
      </form>

      <Text className="register-text">
        <p>
          Already have an Account?{" "}
          <Link to="/login">
            <a>Sign in</a>
          </Link>
        </p>
      </Text>
    </RegisterContainer>
  );
};

export default Register;
