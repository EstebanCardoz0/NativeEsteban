import { Redirect, Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const RootNavigation = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}></Stack>
      {isLogin ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)" />}
    </>
  );
};

export default RootNavigation;
