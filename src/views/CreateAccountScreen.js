import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { createAccount } from "../api/mock";
import { setToken } from "../api/token";

const CreateAccountScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const createUser = () => {
    setErrorMessage("");
    createAccount("test@gmail", "password", false)
      .then(async (res) => {
        await setToken(res.auth_token);
        navigation.navigate("Home");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>CreateAccount</Text>
      <Button title="Créer un compte" onPress={createUser} />
      <Button
        title="Se connecter"
        onPress={() => navigation.navigate("Login")}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default CreateAccountScreen;
