import { View } from "react-native";
import React from "react";
import Recover from "../forms/Recover";

export default function RecoverScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Recover {...props} />
    </View>
  );
}
