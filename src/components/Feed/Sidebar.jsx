import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InterectiveButton from "../Reusable/InterectiveButton";
import { SIZES } from "../../constants/theme";

const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      <InterectiveButton iconName={"heart"} iconSize={40} iconColor={"#fff"} />
      <InterectiveButton
        iconName={"commenting"}
        iconSize={40}
        iconColor={"#fff"}
      />
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  sidebar: {
    alignItems: "flex-end",
    gap: 10,
    marginRight: 20,
  },
});
