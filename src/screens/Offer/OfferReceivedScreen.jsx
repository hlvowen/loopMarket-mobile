import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem, Button } from "@rneui/themed";
import { COLORS } from "../../constants/theme";
import {
  getAllOfferBySellerId,
  updateStatus,
} from "../../api/negociationService";
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
    let disabledBtnValidate = false;
    let disabledBtnRefuse = false;

    if (item.status == "Acceptée") {
      disabledBtnRefuse = true;
    } else if (item.status == "Refusée") {
      disabledBtnValidate = true;
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
        rightContent={() => (
          <View style={{ flexDirection: "row", width: "100%" }}>
            <Button
              onPress={() => {
                updateStatus({});
              }}
              icon={{ name: "check", color: "white" }}
              buttonStyle={{
                width: 65.5,
                backgroundColor: COLORS.primary,
                height: "100%",
              }}
              disabled={disabledBtnValidate}
            />
            <Button
              onPress={() => reset()}
              icon={{ name: "close", color: "white" }}
              buttonStyle={{
                width: 65.5,
                backgroundColor: COLORS.error,
                height: "100%",
              }}
              disabled={disabledBtnRefuse}
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
            {item["acheteur_nego_id"]["$oid"]} vous propose{" "}
            {item["nouveau_prix"]} € pour l'article{" "}
            {item["annonce_nego_id"]["$oid"]}
          </Text>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    );
  };

  return (
    <View>
      <FlatList
        data={negociations}
        keyExtractor={(item) => item["_id"]["$oid"]}
        extraData={this.state}
        renderItem={renderItem}
      />
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
