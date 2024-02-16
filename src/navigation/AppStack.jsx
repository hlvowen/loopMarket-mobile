import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import { CheckoutScreen } from "../screens";
import PaymentScreen from "../screens/Payment/PaymentScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default AppStack;
