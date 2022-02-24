import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { setToken } from "../../api/token";

const EmailForm = ({
  buttonText,
  onSubmit,
  children,
  onAuthentication,
  signIn,
}) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = () => {
    onSubmit(email, password)
      .then(async (res) => {
        await setToken(res.auth_token);
        onAuthentication();
      })
      .catch((res) => setErrorMessage(res.error));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>EMAIL</Text>
      <Input
        placeholder="example@gmail.com"
        autoFocus
        inputContainerStyle={styles.input}
        inputStyle={styles.placeholder}
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Text style={styles.text}>MOT DE PASSE</Text>
      <Input
        placeholder="*********"
        inputContainerStyle={styles.input}
        inputStyle={styles.placeholder}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        secureTextEntry
      />
      <View style={styles.centerContainer}>
        <Button
          icon={
            signIn ? (
              <AntDesign name="login" size={24} color="green" />
            ) : (
              <MaterialCommunityIcons
                name="account-plus"
                size={24}
                color="green"
              />
            )
          }
          onPress={submit}
          title={buttonText}
          buttonStyle={{
            backgroundColor: "rgba(244, 244, 244, 1)",
            borderRadius: 3,
          }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ marginHorizontal: 20, color: "black" }}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  input: {
    borderBottomWidth: 0,
    marginBottom: 10,
    borderRadius: 6,
    paddingVertical: 5,
    width: "100%",
  },
  placeholder: {
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    color: "#333",
    marginLeft: 10,
    marginBottom: -10,
  },
  errorMessage: {
    marginTop: 40,
  },
  centerContainer: {
    paddingHorizontal: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: "100%",
  },
});

export default EmailForm;
