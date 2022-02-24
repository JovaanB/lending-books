import React from "react";
import Layout from "../components/layouts/Layout";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
        onTouchStart={() => navigation.navigate("Library")}
      >
        <MaterialCommunityIcons name="bookshelf" size={60} color="black" />
        <Text>MA BIBLIOTHEQUE</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
        onTouchStart={() => navigation.navigate("Lending")}
      >
        <Entypo name="cycle" size={60} color="black" />
        <Text>MES PRÊTS</Text>
      </View>
    </Layout>
  );
}

export default HomeScreen;
