import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../constants/theme";
import { ListItem, Button } from "@rneui/themed";
import {
  getAllOfferByBuyerId,
  getAllOfferByBuyerIdAndStatus,
} from "../../api/negociationService";
import AuthContext from "../../context/AppContext";

const MyOfferScreen = ({ navigation }) => {
  const { userId } = React.useContext(AuthContext);
  const [negociations, setNegociations] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // getAllOfferByBuyerIdAndStatus(`${userId}`, "Acceptée")
    //   .then((response) => {
    //     setNegociations(response);
    //   })
    //   .catch((error) => {});

    getAllOfferByBuyerId(`${userId}`)
      .then((response) => {
        setNegociations(response);
      })
      .catch((error) => {});
  }, []);

  handleRefresh = () => {
    setRefreshing(true);
    getAllOfferByBuyerIdAndStatus(`${userId}`, "Acceptée")
      .then((response) => {
        setNegociations(response);
      })
      .catch((error) => {});
    setRefreshing(false);
  };

  const renderItem = ({ item }) => {
    let btnCta;

    if (item.status == "Acceptée") {
      btnCta = (
        <Button
          title="Payer"
          icon={{ name: "shopping-cart", color: "white" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: COLORS.primary }}
        />
      );
    } else if (item.status == "Refusée") {
      btnCta = (
        <Button
          title="Négocier"
          onPress={() =>
            navigation.navigate("PlaceAnOffer", {
              postId: item["annonce_nego_id"]["$oid"],
              prix: item["ancien_prix"],
              vendeurId: item["vendeur_nego_id"]["$oid"],
            })
          }
          buttonStyle={{ minHeight: "100%", backgroundColor: COLORS.primary }}
        />
      );
    }
    return (
      <ListItem.Swipeable
        containerStyle={{
          backgroundColor: "#FFEAD2",
          borderBottomWidth: 2,
          borderColor: COLORS.primaryVariant,
        }}
        rightContent={() => btnCta}
      >
        <Image
          style={styles.image}
          source={require("../../assets/book.jpg")}
          resizeMode="stretch"
        />
        <ListItem.Content>
          <Text>
            Votre proposition pour l'article {item["annonce_nego_id"]["$oid"]} :{" "}
            {item.status}
          </Text>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={negociations}
        renderItem={renderItem}
        keyExtractor={(item) => item["_id"]["$oid"]}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
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
