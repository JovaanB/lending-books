import { useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import { getLoans } from "../api/mock";
import moment from "moment";
import CheckBoxIcon from "react-native-elements/dist/checkbox/CheckBoxIcon";

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
            <Button
              icon={<AntDesign name="checksquare" size={24} color="green" />}
              title="Récupérer"
              buttonStyle={{
                backgroundColor: "rgba(244, 244, 244, 1)",
                borderRadius: 3,
              }}
              containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ marginHorizontal: 20, color: "black" }}
            />
          </Card>
        );
      })}
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
  boldText: {
    fontWeight: "900",
  },
});

export default Lending;
