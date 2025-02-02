import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ActiveIngredientsList from "./ActiveIngredientsList";
import InactiveIngredientsList from "./InactiveIngredientsList";

const DrugInfoScreen = ({ route, navigation }) => {
  const { genericName, activeIngredients, inactiveIngredients } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Drug Information</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Generic Name:</Text>
        <Text style={styles.value}>{genericName || "Tamiflu"}</Text>
      </View>

      <ActiveIngredientsList ingredients={activeIngredients} />
      <InactiveIngredientsList ingredients={inactiveIngredients} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.buttonText}>Scan Another</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa", padding: 20 },
  topButtonContainer: { position: "absolute", top: 40, right: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15, textAlign: "center", color: "#333" },
  infoBox: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: { fontSize: 16, fontWeight: "600", color: "#555" },
  value: { fontSize: 18, fontWeight: "bold", color: "#222", marginTop: 5 },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { fontSize: 18, color: "#fff", fontWeight: "600" },
});

export default DrugInfoScreen;