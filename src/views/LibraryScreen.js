import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, Button } from "react-native";

function DetailsScreen() {
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
        <MaterialCommunityIcons name="bookshelf" size={60} color="black" />
        <Text>MA BIBLIOTHEQUE</Text>
      </View>
    </View>
  );
}

export default DetailsScreen;
