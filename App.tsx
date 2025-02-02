import { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { supabase } from "./lib/supabase";
import Auth from "./components/Auth";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import CameraScreen from "./components/CameraScreen";
import ConfirmNDCScreen from "./components/ConfirmNDCScreen";
import DrugInfoScreen from "./components/DrugInfoScreen";
import { Session } from "@supabase/supabase-js";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  // supabase.auth.signOut()
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      console.log("Initial Session:", session);
      console.log("Session Fetch Error:", error);
      setSession(session);
      setLoading(false);
    });
  
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth State Changed:", session);
      setSession(session);
    });
  
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {session && session.user ? (
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: "Profile" }} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ConfirmNDCScreen" component={ConfirmNDCScreen} options={{ title: "Confirm NDC" }} />
          <Stack.Screen name="DrugInfoScreen" component={DrugInfoScreen} options={{ title: "Drug Information" }} />
        </Stack.Navigator>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
}