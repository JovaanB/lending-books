import { useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";
import { getLoans } from "../api/mock";
import moment from "moment";
import LightButton from "../components/LightButton";

function Lending() {
  const [loans, setLoans] = useState([]);

  const loadLoans = () => {
    getLoans()
      .then((res) => setLoans(res.loans))
      .catch(() => {});
  };

  useEffect(() => {
    loadLoans();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Entypo name="cycle" size={60} color="black" />
        <Text>MES PRÊTS</Text>
      </View>

      <ScrollView style={styles.loadsContainer}>
        {loans.map((loan, i) => {
          const dateNow = moment();
          const dateTo = moment(loan.to, "DD/MM/YYYY");
          const istLate = dateNow.isAfter(dateTo);

          return (
            <Card key={i} style={styles.cardContainer}>
              <Card.Title>{loan.title}</Card.Title>
              <Card.Divider />
              {istLate && (
                <View style={styles.headerContainer}>
                  <Entypo name="warning" size={24} color="red" />
                  <Text>RETARD</Text>
                </View>
              )}
              <Text>
                À <Text style={styles.boldText}>{loan.who}</Text>
              </Text>
              <Text>
                Du <Text style={styles.boldText}>{loan.from}</Text> Au{" "}
                <Text style={styles.boldText}>{loan.to}</Text>
              </Text>
              <LightButton
                icon={<AntDesign name="checksquare" size={24} color="green" />}
                buttonText="Récupérer"
              />
            </Card>
          );
        })}
      </ScrollView>

      <Button
        icon={<Entypo name="cycle" size={24} color="green" />}
        title="Ajouter un prêt"
        buttonStyle={{
          backgroundColor: "rgba(244, 244, 244, 1)",
          borderRadius: 3,
        }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginTop: 10,
          marginBottom: 30,
        }}
        titleStyle={{ marginHorizontal: 20, color: "black" }}
      />
    </View>
  );
}

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
  cardContainer: {
    flex: 1,
    width: "100%",
  },
  loadsContainer: {
    width: "100%",
    marginBottom: 30,
  },
  boldText: {
    fontWeight: "900",
  },
});

export default Lending;
