import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Auth</Text>
      </View>
      <View style={styles.body}>
        <Image></Image>
      </View>
      <View style={styles.footer}>
        <Text>Auth</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 70,
  },
  header: {
    // height: 40,
    // width: 40,
    // backgroundColor: "red",
  },
  body: {
    // backgroundColor: "blue",
    // height: 40,
    // width: 40,
  },
  footer: {
    // backgroundColor: "green",
    // height: 40,
    // width: 40,
  },
});
export default Auth;
