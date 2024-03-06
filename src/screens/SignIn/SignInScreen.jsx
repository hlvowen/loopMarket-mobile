import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { COLORS } from "../../constants/theme";
import ReusableButton from "../../components/Reusable/ReusableButton";
import AuthContext from "../../context/AppContext";

export default function SignInScreen({ navigation }) {
  const { userId, setUserId } = React.useContext(AuthContext);
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
              setUserId("65dcfe5d277c2722bdfe9363");
              navigation.navigate("Root");
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
              setUserId("65dcfe5d277c2722bdfe9362");
              navigation.navigate("Root");
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
              setUserId("65dcfe5d277c2722bdfe9364");
              navigation.navigate("Root");
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
