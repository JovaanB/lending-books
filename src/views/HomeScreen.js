import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { getUsers } from "../api/mock";
import { setToken } from "../api/token";

function HomeScreen({ navigation }) {
  const [state, setState] = useState({
    users: [],
    hasLoadedUsers: false,
    userLoadingErrorMessage: "",
  });

  const loadUsers = () => {
    setState({ hasLoadedUsers: false, userLoadingErrorMessage: "" });
    getUsers()
      .then((res) =>
        setState({
          hasLoadedUsers: true,
          users: res.users,
        })
      )
      .catch(handleUserLoadingError);
  };

  const handleUserLoadingError = (res) => {
    if (res.error === 401) {
      navigation.navigate("Login");
    } else {
      setState({
        hasLoadedUsers: false,
        userLoadingErrorMessage: res.message,
      });
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const logOut = async () => {
    await setToken("");
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      {state.users?.map((user) => (
        <Text key={user.email}>{user.email}</Text>
      ))}
      {state.userLoadingErrorMessage ? (
        <Text>{state.userLoadingErrorMessage}</Text>
      ) : null}
      <Button title="Log out" onPress={logOut} />
    </View>
  );
}

export default HomeScreen;
