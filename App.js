import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Post } from "./src/components";
import AppStack from "./src/navigation/AppStack";
import AuthContext from "./src/context/AppContext";
import { useState } from "react";
export default function App() {
  const [userId, setUserId] = useState("");
  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
