import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import { CheckoutScreen } from "../screens";
import PaymentScreen from "../screens/Payment/PaymentScreen";
import PostDetailsScreen from "../screens/PostDetails/PostDetailsScreen";
import PlaceAnOfferScreen from "../screens/Offer/PlaceAnOfferScreen";
import SignInScreen from "../screens/SignIn/SignInScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SigIn"
        component={SignInScreen}
        options={{ headerShown: true, headerTitle: "Connexion" }}
      /> */}
      <Stack.Screen
        name="Root"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ headerTitle: "Paiement" }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetailsScreen}
        options={{ headerTitle: "Paiement", headerShown: false }}
      />
      <Stack.Screen
        name="PlaceAnOffer"
        component={PlaceAnOfferScreen}
        options={{
          headerTitle: "Faire une offre",
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
