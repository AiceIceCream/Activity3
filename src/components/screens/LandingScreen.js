import { View } from "react-native";
import React from "react";
import Landing from "../forms/Landing";

export default function LandingScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Landing {...props} />
    </View>
  );
}
