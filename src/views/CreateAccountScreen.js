import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Button } from "react-native-elements";
import { createAccount } from "../api/mock";
import EmailForm from "../components/forms/EmailForm";
import LightButton from "../components/LightButton";

const CreateAccountScreen = ({ navigation }) => {
  return (
    <EmailForm
      buttonText="Créer un compte"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate("Home")}
    >
      <LightButton
        navigation={navigation}
        icon={<AntDesign name="login" size={24} color="green" />}
        url="Login"
        buttonText="Se connecter"
      />
    </EmailForm>
  );
};

export default CreateAccountScreen;
