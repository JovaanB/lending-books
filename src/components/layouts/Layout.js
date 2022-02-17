import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <Button color="#000" title="Se déconnecter" onPress={logOut} />
        <MaterialIcons
          onPress={() => navigation.navigate("Profile")}
          name="account-circle"
          size={40}
          color="black"
        />
      </View>
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
