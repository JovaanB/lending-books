import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, View, Button, StyleSheet } from "react-native";
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
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Button color="#000" title="Se déconnecter" onPress={logOut} />
        <MaterialIcons
          onPress={() => navigation.navigate("Profile")}
          name="account-circle"
          size={40}
          color="black"
        />
        <Fontisto
          name="credit-card"
          size={24}
          color="black"
          style={styles.creditIcon}
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  creditIcon: {
    marginHorizontal: 10,
  },
});

export default Layout;
