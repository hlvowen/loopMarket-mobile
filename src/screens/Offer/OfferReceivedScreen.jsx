import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import NegotiationNotification from "../../components/Messages/NegotiationNotification";
import { ListItem, Button } from "@rneui/themed";
import { COLORS } from "../../constants/theme";
import { getAllOfferBySellerId } from "../../api/negociationService";
import { FlatList } from "react-native-gesture-handler";

const OfferReceivedScreen = () => {
  const [negociations, setNegociations] = useState([]);

  useEffect(() => {
    getAllOfferBySellerId("65dcfe5d277c2722bdfe9364")
      .then((response) => {
        console.log(response);
        setNegociations(response);
      })
      .catch((error) => {});
  }, []);

  const renderItem = ({ item }) => {
    let opacityRefused;
    let opacityValidate;
    if (item.status == "En attente") {
      opacityValidate = 1;
      opacityRefused = 1;
    } else {
      if (item.status == "Acceptée") {
        opacityRefused = 0.6;
        opacityValidate = 1;
      } else {
        opacityRefused = 1;
        opacityValidate = 0.6;
      }
    }

    let disabledBtn = false;

    if (item.status == "Acceptée" || item.status == "Refusée") {
      disabledBtn = true;
    }
    return (
      <ListItem.Swipeable
        containerStyle={{
          backgroundColor: "#FFEAD2",
          borderBottomWidth: 2,
          borderColor: COLORS.primaryVariant,
        }}
        rightContent={(reset) => (
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Button
              onPress={() => reset()}
              icon={{ name: "check", color: "white" }}
              buttonStyle={{
                width: 65.5,
                backgroundColor: COLORS.primary,
                height: "100%",
                opacity: opacityValidate,
              }}
              disabled={disabledBtn}
            />
            <Button
              onPress={() => reset()}
              icon={{ name: "close", color: "white" }}
              buttonStyle={{
                width: 65.5,
                backgroundColor: COLORS.error,
                height: "100%",
                opacity: opacityValidate,
              }}
              disabled={disabledBtn}
            />
          </View>
        )}
      >
        <Image
          style={styles.image}
          source={require("../../assets/book.jpg")}
          resizeMode="stretch"
        />
        <ListItem.Content>
          <Text>
            {item["acheteur_nego_id"]["$oid"]} vous propose
            {item["nouveau_prix"]} pour l'article{" "}
            {item["annonce_nego_id"]["$oid"]}
          </Text>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    );
  };

  return (
    <View>
      <FlatList data={negociations} renderItem={renderItem} />
    </View>
  );
};

export default OfferReceivedScreen;

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
