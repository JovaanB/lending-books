import React from "react";
import { Button } from "react-native";
import { login } from "../api/mock";
import EmailForm from "../components/forms/EmailForm";

const LoginScreen = ({ navigation }) => {
  return (
    <EmailForm
      buttonText="Se connecter"
      onSubmit={login}
      onAuthentication={() => navigation.navigate("Home")}
    >
      <Button
        title="Créer un compte"
        onPress={() => navigation.navigate("CreateAccount")}
      />
    </EmailForm>
  );
};

export default LoginScreen;
