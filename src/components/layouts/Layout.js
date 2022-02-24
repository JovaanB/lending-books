import React, { useState } from "react";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, View, Button, StyleSheet, Text } from "react-native";
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
          onPress={() => navigation.navigate("Subscribe")}
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
      <View style={styles.footer}>
        <MaterialIcons name="bug-report" size={24} color="black" />
      </View>
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
  footer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 40,
    alignItems: "center",
    height: 50,
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Layout;
