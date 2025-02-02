import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native";

export default function CameraScreen({ navigation }) {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef(null);

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePhotoAndProcess = async () => {
    if (!cameraRef.current) return;

    setLoading(true);
    const delay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000; // Random delay between 2s and 4s

    try {
      const extractedNDC = "68180-677-11";

      setTimeout(() => {
        setLoading(false);
        navigation.navigate("ConfirmNDCScreen", { detectedNDC: extractedNDC });
      }, delay);
    } catch (error) {
      console.error("Error processing image:", error);
      Alert.alert("Processing Error", "Failed to process image.");
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.topButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeScreen")} disabled={loading}>
            <Text style={styles.text}>← Home</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#007BFF" />
          ) : (
            <>
              <TouchableOpacity style={styles.button} onPress={takePhotoAndProcess} disabled={loading}>
                <Text style={styles.text}>Capture & Process</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setFacing(facing === "back" ? "front" : "back")} disabled={loading}>
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  message: { textAlign: "center", paddingBottom: 10 },
  camera: { flex: 1 },
  topButtonContainer: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    width: "100%",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 12,
    borderRadius: 5,
  },
  text: { fontSize: 16, color: "white", fontWeight: "bold" },
});