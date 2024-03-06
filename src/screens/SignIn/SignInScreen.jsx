import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import ReusableButton from "../../components/Reusable/ReusableButton";

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ alignItems: "center", gap: 50 }}>
          <ReusableButton
            width={300}
            height={40}
            borderWidth={2}
            bgColor={COLORS.primary}
            borderColor={COLORS.primaryVariant}
            borderRadius={4}
            label={"Alexis"}
            labelColor={COLORS.primaryVariant}
            fontSize={16}
            onPress={() => {
              navigation.navigate("PlaceAnOffer", {
                postId: post["_id"]["$oid"],
                prix: post.prix,
                vendeurId: post["vendeur_id"]["$oid"],
              });
            }}
          />
          <ReusableButton
            width={300}
            height={40}
            borderWidth={2}
            bgColor={COLORS.primary}
            borderColor={COLORS.primaryVariant}
            borderRadius={4}
            label={"Loïc"}
            labelColor={COLORS.primaryVariant}
            fontSize={16}
            onPress={() => {
              navigation.navigate("PlaceAnOffer", {
                postId: post["_id"]["$oid"],
                prix: post.prix,
                vendeurId: post["vendeur_id"]["$oid"],
              });
            }}
          />
          <ReusableButton
            width={300}
            height={40}
            borderWidth={2}
            bgColor={COLORS.primary}
            borderColor={COLORS.primaryVariant}
            borderRadius={4}
            label={"Hoang Long"}
            labelColor={COLORS.primaryVariant}
            fontSize={16}
            onPress={() => {
              navigation.navigate("PlaceAnOffer", {
                postId: post["_id"]["$oid"],
                prix: post.prix,
                vendeurId: post["vendeur_id"]["$oid"],
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  card: {
    backgroundColor: "#FFEAD2",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 8,
  },
});
