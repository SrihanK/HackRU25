import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

const ConfirmNDCScreen = ({ route, navigation }) => {
  const { detectedNDC } = route.params;
  const [ndcCode, setNdcCode] = useState(detectedNDC);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    const delay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("DrugInfoScreen", { ndcCode });
    }, delay);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.buttonText}>← Home</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>Confirm NDC Code</Text>

      <Text style={styles.label}>Detected NDC Code:</Text>
      <TextInput style={styles.input} value={ndcCode} onChangeText={setNdcCode} keyboardType="default" autoCapitalize="characters" />

      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleConfirm} disabled={loading}>
          <Text style={styles.buttonText}>Confirm & Search</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa", padding: 20, justifyContent: "center" },
  topButtonContainer: { position: "absolute", top: 40, right: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#333" },
  label: { fontSize: 16, fontWeight: "600", color: "#555", marginBottom: 5 },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    fontSize: 18,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { fontSize: 18, color: "#fff", fontWeight: "600" },
});

export default ConfirmNDCScreen;