import React, { useState, useEffect } from "react";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { getBooks } from "../api/mock";
import { Grid, Col, Row } from "react-native-easy-grid";
import { Button } from "react-native-elements";

const LibraryScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  const loadBooks = () => {
    getBooks()
      .then((res) => setBooks(res.books))
      .catch(() => {});
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <View style={styles.mainContainer}>
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
      <Text style={styles.titleText}>Mes livres</Text>
      {books.length > 0 && (
        <Grid style={styles.booksContainer}>
          <Col size={50}>
            <Row style={styles.cell}>
              <Text>Titre</Text>
            </Row>
            {books.map((book, i) => (
              <Row key={i} style={styles.cell}>
                <Text
                  style={styles.boldText}
                  onPress={() => {
                    navigation.navigate("OneBook", {
                      book,
                    });
                  }}
                >
                  {book.title}
                </Text>
              </Row>
            ))}
          </Col>
          <Col size={25}>
            <Row style={styles.cell}>
              <Text>Auteur</Text>
            </Row>
            {books.map((book, i) => (
              <Row key={i} style={styles.cell}>
                <Text>{book.author}</Text>
              </Row>
            ))}
          </Col>
          <Col size={25}>
            <Row style={styles.cell}>
              <Text>Note</Text>
            </Row>
            {books.map((book, i) => (
              <Row key={i} style={styles.cell}>
                <Text>{book.stars}/10</Text>
                <MaterialIcons
                  name="stars"
                  size={16}
                  color="black"
                  style={styles.starIcon}
                />
              </Row>
            ))}
          </Col>
        </Grid>
      )}
      <Button
        icon={<Entypo name="cycle" size={24} color="green" />}
        title="Ajouter un livre"
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
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleText: { fontWeight: "bold", marginTop: 15, fontSize: 16 },
  booksContainer: { margin: 15, marginBottom: 40 },
  boldText: { fontWeight: "bold" },
  cell: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  starIcon: {
    marginLeft: 5,
  },
});

export default LibraryScreen;
