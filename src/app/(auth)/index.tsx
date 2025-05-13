import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "@/src/constants/imagePath";
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from "react-native-size-matters";
import { router } from "expo-router";

const Auth = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  // let navigateToTermsAgree = () => {
  //   router.push("/(auth)/terms_agree");
  // };

  // let loadingTimeout = () => {
  //   setIsLoading(true);
  //   setTimeout( navigateToTermsAgree, 2000);
  // };

  // useEffect(() => {
  //   setTimeout(() => loadingTimeout(), 2000);
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Auth</Text>
      </View>
      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        <Text style={styles.whatsAppText}>RHCP</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0CCCB3"} />
            <Text style={styles.facebookText}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.fromText}>from</Text>
            <Text style={styles.facebookText}>ESTEBAN CARDOZO</Text>
          </>
        )}
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
    paddingVertical: moderateScale(70),
  },
  header: {
    // height: 40,
    // width: 40,
    // backgroundColor: "red",
  },
  body: {
    alignItems: "center",
    gap: moderateVerticalScale(7),
    // backgroundColor: "blue",
    // height: 40,
    // width: 40,
  },
  footer: {
    alignItems: "center",
    // backgroundColor: "green",
    height: verticalScale(70),
    justifyContent: "flex-end",
    // width: 40,
  },
  logoStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  whatsAppText: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "#00000",
  },
  facebookText: {
    fontSize: moderateScale(15),
    color: "#867373",
  },
  fromText: {
    fontSize: moderateScale(12),
    color: "#867373",

  },
});
export default Auth;
