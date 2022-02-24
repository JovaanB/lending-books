import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { getBooks } from "../api/mock";
import { Grid, Col, Row } from "react-native-easy-grid";

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
              </Row>
            ))}
          </Col>
        </Grid>
      )}
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
});

export default LibraryScreen;
