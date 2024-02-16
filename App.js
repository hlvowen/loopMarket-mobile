import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Post } from "./src/components";
import AppNavigator from "./src/navigation/AppNavigator";
import AppStack from "./src/navigation/AppStack";

const posts = [
  {
    id: 1,
    title: "Title of the post",
    caption: "Caption of the post",
    photo: require("./src/assets/book.jpg"),
  },
  {
    id: 2,
    title: "Title of the post",
    caption: "Caption of the post",
    photo: require("./src/assets/book.jpg"),
  },
  {
    id: 3,
    title: "Title of the post",
    caption: "Caption of the post",
    photo: require("./src/assets/book.jpg"),
  },
  {
    id: 4,
    title: "Title of the post",
    caption: "Caption of the post",
    photo: require("./src/assets/book.jpg"),
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
