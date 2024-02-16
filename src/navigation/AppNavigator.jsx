import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FeedScreen, ProfileScreen } from "../screens";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryVariant,
      }}
    >
      <Tab.Screen
        name="Feed Stack"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="instagram" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
