import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <MaterialIcons name="account-circle" size={60} color="black" />
        <Text>MON COMPTE</Text>
      </View>
      <View style={styles.infosContainer}>
        <Text style={styles.titleText}>NOM</Text>
        <Text>Depardieu</Text>

        <Text style={styles.titleText}>Prénom</Text>
        <Text>Gérard</Text>

        <Text style={styles.titleText}>Date de naissance</Text>
        <Text>11/08/1941</Text>

        <Text style={styles.titleText}>Email</Text>
        <Text>depardieu.gerard@gmail.com</Text>

        <Text style={styles.titleText}>N° de téléphone</Text>
        <Text>06 55 12 01 47</Text>
      </View>
      <View style={styles.headerContainer}>
        <Button title="Modifier" color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: "100%",
  },
  infosContainer: {
    marginLeft: 100,
    width: "100%",
  },
  titleText: { fontWeight: "bold", marginTop: 15, fontSize: 16 },
});

export default ProfileScreen;
