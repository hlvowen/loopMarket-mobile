import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import { ListItem, Button } from "@rneui/themed";

const MyOfferScreen = () => {
  return (
    <View style={styles.container}>
      <ListItem.Swipeable
        containerStyle={{
          backgroundColor: "#FFEAD2",
          borderBottomWidth: 2,
          borderColor: COLORS.primaryVariant,
        }}
        rightContent={(reset) => (
          <Button
            title="Payer"
            onPress={() => reset()}
            icon={{ name: "shopping-cart", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: COLORS.primary }}
          />
        )}
      >
        <Image
          style={styles.image}
          source={require("../../assets/book.jpg")}
          resizeMode="stretch"
        />
        <ListItem.Content>
          <Text>
            Votre proposition pour l'article a été acceptée fefewfoowfjiwjo
            jiojfoeiwjfefhwoihoi
          </Text>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    </View>
  );
};

export default MyOfferScreen;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.background,
  },
  notification: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#FFEAD2",
  },
  msgContainer: { marginStart: 15 },
});
