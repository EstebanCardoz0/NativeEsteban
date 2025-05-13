import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Icon } from "@/src/constants/icons";
import { COLORS } from "@/src/constants/colors";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "home-outline",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={COLORS.secondary} size={size} />
          ),
        }}
      />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
