import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { supabase } from "../lib/supabase";

const ProfileScreen = () => {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      const { data: user, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
        setUserName("User");
      } else {
        setUserName(user.user_metadata?.full_name || user.email); // Use full name or fallback to email
      }
      setLoading(false);
    };

    fetchUserName();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello, Your Excellence!</Text>
      <Text style={styles.subText}>This is your profile page.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
  },
});

export default ProfileScreen;