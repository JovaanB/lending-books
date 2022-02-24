import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import LightButton from "../components/LightButton";

function ProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.centerContainer}>
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
      <View style={styles.centerContainer}>
        <LightButton
          icon={<MaterialIcons name="update" size={24} color="green" />}
          buttonText="Modifier"
        />
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
  centerContainer: {
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
