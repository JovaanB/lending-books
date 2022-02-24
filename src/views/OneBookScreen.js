import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Rating } from "react-native-elements";
import LightButton from "../components/LightButton";

function OneBookScreen({ route }) {
  const { book } = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.centerContainer}>
        <MaterialCommunityIcons name="bookshelf" size={60} color="black" />
        <Text>DÉTAILS DU LIVRE</Text>
      </View>
      <View style={styles.infosContainer}>
        <Text style={styles.titleText}>TITRE</Text>
        <Text>{book.title}</Text>

        <Text style={styles.titleText}>Auteur</Text>
        <Text>{book.author}</Text>

        <Text style={styles.titleText}>Genre</Text>
        <Text>lorem ipsum</Text>

        <Text style={styles.titleText}>Note</Text>
        <Rating
          type="star"
          fractions={1}
          ratingCount={10}
          startingValue={book.stars}
          readonly
          imageSize={20}
          style={{ padding: 0, margin: 0 }}
        />

        <Text style={styles.titleText}>Commentaire</Text>
        <Text>
          Nisi deserunt esse sit reprehenderit non ex Lorem adipisicing laborum
          sint. Reprehenderit aute ex sint laborum est cillum quis velit eu anim
          eu nisi. Id exercitation excepteur elit culpa. Ea duis ullamco
          adipisicing ullamco esse culpa. Reprehenderit pariatur tempor
          adipisicing Lorem ea. Dolore ipsum ea voluptate proident reprehenderit
          dolore enim duis. Qui adipisicing Lorem culpa proident ea proident
          amet aute sunt enim id ullamco.
        </Text>
      </View>
      <View style={styles.centerContainer}>
        <LightButton
          icon={<MaterialIcons name="update" size={24} color="green" />}
          buttonText="Modifier"
        />
        <Feather name="share" size={24} color="black" />
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
  },
  infosContainer: {
    marginHorizontal: 30,
  },
  titleText: { fontWeight: "bold", marginTop: 15, fontSize: 16 },
});

export default OneBookScreen;
