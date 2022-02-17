import React, { useState } from "react";
import { SafeAreaView, Button } from "react-native";
import { setToken } from "../../api/token";
import SearchBar from "../SearchBar";

const Layout = ({ children, navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  const logOut = async () => {
    await setToken("");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    >
      <Button title="Se déconnecter" onPress={logOut} />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {children}
    </SafeAreaView>
  );
};
export default Layout;
