import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ActiveIngredientsList = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Active Ingredients</Text>
        <Text style={styles.ingredient}>Oseltamivir Phosphate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d4edda", // Light green
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#155724",
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 16,
    color: "#155724",
  },
});

export default ActiveIngredientsList;