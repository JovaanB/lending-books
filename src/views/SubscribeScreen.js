import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PricingCard } from "react-native-elements";

function SubscribeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.centerContainer}>
        <MaterialIcons name="account-circle" size={60} color="black" />
        <Text>S'ABONNER</Text>
      </View>
      <ScrollView style={styles.pricingContainer}>
        <PricingCard
          color="red"
          title="Gratuit"
          price="-"
          info={["Publicités", "Limiter à 3 prêts / mois"]}
          button={{
            title: " Déjà abonné",
            icon: "flight-takeoff",
            disabled: true,
          }}
        />
        <PricingCard
          color="green"
          title="Pro"
          price="5€ / mois"
          info={["Sans publicité", "Aucune limitation de prêt"]}
          button={{ title: " S'abonner", icon: "flight-takeoff" }}
        />
      </ScrollView>
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
  pricingContainer: {
    width: "100%",
    marginBottom: 40,
  },
  titleText: { fontWeight: "bold", marginTop: 15, fontSize: 16 },
});

export default SubscribeScreen;
