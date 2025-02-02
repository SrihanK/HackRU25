import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const InactiveIngredientsList = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inactive Ingredients</Text>
        <Text style={styles.ingredient}>Mannitol, saccharin sodium, sodium benzoate, sodium dihydrogen citrate, sorbitol, sour cherry flavor, titanium dioxide, and xanthan gum</Text>
        {/* // keyExtractor={(item, index) => index.toString()}
        // renderItem={({ item }) => <Text style={styles.ingredient}>{item}</Text>}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8d7da", // Light red
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#721c24",
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 16,
    color: "#721c24",
  },
});

export default InactiveIngredientsList;