import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import { FeedScreen, ProfileScreen } from "../screens";
import MessagesScreen from "../screens/Messages/MessagesScreen";
import { COLORS } from "../constants/theme";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import TopTabs from "./TopTabs";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryVariant,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={TopTabs}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.primary },
          tabBarLabel: "Messages",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profil",
          headerTitle: "Profil",
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.primary },
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
