import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyOfferScreen from "../screens/Offer/MyOfferScreen";
import OfferReceivedScreen from "../screens/Offer/OfferReceivedScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyOffer"
        component={MyOfferScreen}
        options={{ tabBarLabel: "Mes propositions" }}
      />
      <Tab.Screen
        name="OfferReceived"
        component={OfferReceivedScreen}
        options={{ tabBarLabel: "Propositions reçues" }}
      />
    </Tab.Navigator>
  );
};

export default TopTabs;

const styles = StyleSheet.create({});
