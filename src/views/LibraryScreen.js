import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text } from "react-native";
import { getBooks } from "../api/mock";

const DetailsScreen = () => {
  const [books, setBooks] = React.useState([]);

  const loadBooks = () => {
    getBooks()
      .then((res) => setBooks(res.books))
      .catch(() => {});
  };

  React.useEffect(() => {
    loadBooks();
  }, []);

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
      <Text>Mes livres</Text>
      {books.map((book) => (
        <Text>{book.title}</Text>
      ))}
    </View>
  );
};

export default DetailsScreen;
