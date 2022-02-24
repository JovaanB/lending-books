import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Button } from "react-native-elements";
import { login } from "../api/mock";
import EmailForm from "../components/forms/EmailForm";
import LightButton from "../components/LightButton";

const LoginScreen = ({ navigation }) => {
  return (
    <EmailForm
      buttonText="Se connecter"
      onSubmit={login}
      onAuthentication={() => navigation.navigate("Home")}
      signIn
    >
      <LightButton
        icon={
          <MaterialCommunityIcons name="account-plus" size={24} color="green" />
        }
        navigation={navigation}
        url="CreateAccount"
        buttonText="Créer un compte"
      />
    </EmailForm>
  );
};

export default LoginScreen;
