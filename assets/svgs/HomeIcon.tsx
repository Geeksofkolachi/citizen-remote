import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function HomeIcon(props: any) {
  return (
    <View style={styles.container}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path d="M7.33333 0.333344C3.46733 0.333344 0.333328 3.46735 0.333328 7.33334C0.333328 11.1993 3.46733 14.3333 7.33333 14.3333C11.1993 14.3333 14.3333 11.1993 14.3333 7.33334C14.3333 3.46735 11.1993 0.333344 7.33333 0.333344Z" />
        <Path d="M14.9167 13.1667C12.0172 13.1667 9.66666 15.5172 9.66666 18.4167C9.66666 21.3162 12.0172 23.6667 14.9167 23.6667C17.8162 23.6667 20.1667 21.3162 20.1667 18.4167C20.1667 15.5172 17.8162 13.1667 14.9167 13.1667Z" />
        <Path d="M15.5 9.08334C15.5 6.82818 17.3282 5.00001 19.5833 5.00001C21.8385 5.00001 23.6667 6.82818 23.6667 9.08334C23.6667 11.3385 21.8385 13.1667 19.5833 13.1667C17.3282 13.1667 15.5 11.3385 15.5 9.08334Z" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
