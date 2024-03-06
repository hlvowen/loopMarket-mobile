import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import ReusableButton from "../Reusable/ReusableButton";
import { COLORS, SIZES } from "../../constants/theme";

const NegotiationNotification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCol}>
        <Image
          resizeMode={"contain"}
          style={styles.photo}
          source={require("../../assets/book.jpg")}
        />
      </View>
      <View style={styles.middleCol}>
        <Text>Owen vous propose 5$ pour le livre</Text>
      </View>
      <View style={styles.rightCol}>
        <ReusableButton
          label={"Accepter"}
          labelColor={COLORS.primary}
          fontSize={14}
          width={80}
          height={40}
          bgColor={COLORS.primaryVariant}
          borderRadius={4}
        />
        <ReusableButton
          label={"Refuser"}
          labelColor={COLORS.onError}
          fontSize={14}
          width={80}
          height={40}
          bgColor={COLORS.error}
          borderRadius={4}
        />
      </View>
    </View>
  );
};

export default NegotiationNotification;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: 100,
    borderBottomWidth: 2,
    flexDirection: "row",
    padding: 5,
    alignItems: "flex-start",
    backgroundColor: "#FFEAD2",
    borderColor: COLORS.primaryVariant,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  leftCol: {},
  middleCol: { flex: 2, marginLeft: 5 },
  rightCol: { flex: 2, alignItems: "flex-end", marginRight: 5, gap: 5 },
});
