import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import { getUsers } from "../api/mock";
import { setToken } from "../api/token";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
  const [state, setState] = useState({
    users: [],
    hasLoadedUsers: false,
    userLoadingErrorMessage: "",
  });
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

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
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    >
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {state.userLoadingErrorMessage ? (
        <Text>{state.userLoadingErrorMessage}</Text>
      ) : null}
      <Button title="Se déconnecter" onPress={logOut} />
    </SafeAreaView>
  );
}

export default HomeScreen;
