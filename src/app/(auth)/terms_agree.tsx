import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "@/src/constants/imagePath";
import { moderateScale, verticalScale } from "react-native-size-matters";
import BottomComponent from "@/src/components/atoms/BottomComponent";

const TermsAgree = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Los Angeles</Text>
        <Image
          source={imagePath.imageTermsAgree}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Text style={styles.description}>
          Publicado en 1999 por{" "}
          <Text style={styles.linkText}>Warner Records Inc.</Text> y producido
          por {""}
          <Text style={styles.linkText}>Rick Rubin</Text>
        </Text>
        <View style={{ width: moderateScale(300) }}>
          <BottomComponent title="COMIENZA A ESCUCHAR" />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.fromText}>from</Text>
        <Text style={styles.facebookText}>ESTEBAN CARDOZO</Text>
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
    paddingHorizontal: moderateScale(7),
  },
  header: {
    alignItems: "center",
    gap: moderateScale(30),
  },
  imageStyle: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  facebookText: {
    fontSize: moderateScale(15),
    color: "#000000",
  },
  welcomeText: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "#000",
    // marginBottom: verticalScale(10),
  },
  fromText: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  footer: {
    alignItems: "center",
    // backgroundColor: "green",
    height: verticalScale(70),
    justifyContent: "flex-end",
    // width: 40,
  },
  description: {
    fontSize: moderateScale(13),
    color: "#000",
    textAlign: "center",
  },
  linkText: {
    fontSize: moderateScale(13),
    color: "#0C42CC",
    textDecorationLine: "underline",
  },
});

export default TermsAgree;
