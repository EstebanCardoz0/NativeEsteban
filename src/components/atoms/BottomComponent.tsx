import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";

const BottomComponent = ({ title }: any) => {
  return (
    <TouchableOpacity style={styles.bottomContainer}>
      <Text style={styles.bottomText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(10),
    backgroundColor: "#00A884",
    width: "100%",
    borderRadius: moderateScale(4),
    alignItems: "center",
  },
  bottomText: {
    fontSize: moderateScale(15),
    textAlign: "center",
    color: "white",
  },
});
export default BottomComponent;
