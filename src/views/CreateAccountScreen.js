import React from "react";
import { Button } from "react-native";
import { createAccount } from "../api/mock";
import EmailForm from "../components/forms/EmailForm";

const CreateAccountScreen = ({ navigation }) => {
  return (
    <EmailForm
      buttonText="Créer un compte"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate("Home")}
    >
      <Button
        title="Se connecter"
        onPress={() => navigation.navigate("Login")}
      />
    </EmailForm>
  );
};

export default CreateAccountScreen;
