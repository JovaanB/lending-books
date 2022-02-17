import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text } from "react-native";

function Lending() {
  return (
    <View
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
        <Entypo name="cycle" size={60} color="black" />
        <Text>MES PRÊTS</Text>
      </View>
    </View>
  );
}

export default Lending;
