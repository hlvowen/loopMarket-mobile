import {
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ListItem, Button } from "@rneui/themed";
import { COLORS } from "../../constants/theme";
import {
  getAllOfferBySellerId,
  updateStatus,
} from "../../api/negociationService";
import { FlatList } from "react-native-gesture-handler";
import AuthContext from "../../context/AppContext";

const OfferReceivedScreen = () => {
  const [negociations, setNegociations] = useState([]);
  const { userId } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getAllOfferBySellerId(`${userId}`)
      .then((response) => {
        console.log(response);
        setNegociations(response);
      })
      .catch((error) => {});
  }, []);

  handleRefresh = () => {
    console.log("refreshing");
    setRefreshing(true);
    getAllOfferBySellerId(`${userId}`)
      .then((response) => {
        console.log(response);
        setNegociations(response);
      })
      .catch((error) => {});
    setRefreshing(false);
  };

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
                updateStatus(item["_id"]["$oid"], { status: "Acceptée" })
                  .then((response) => {
                    Alert.alert("Vous avez accepté la proposition");
                  })
                  .catch((error) => {
                    Alert.alert("Une erreur est survenue");
                  });
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
              onPress={() => {
                updateStatus(item["_id"]["$oid"], { status: "Refusée" })
                  .then((response) => {
                    Alert.alert("Vous avez refusé la proposition");
                  })
                  .catch((error) => {
                    Alert.alert("Une erreur est survenue");
                  });
              }}
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
        renderItem={renderItem}
        keyExtractor={(item) => item["_id"]["$oid"]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
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
