import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Logo(props: any) {
  return (
    <View style={styles.container}>
      <Svg
        width="22"
        height="18"
        viewBox="0 0 18 14"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M14.7651 14C16.5587 14 18 12.5765 18 10.8402C18 9.10392 16.5587 7.68047 14.7651 7.68047C13.0676 7.57097 12.331 8.97879 11.242 9.91733C10.6335 10.3866 9.86477 10.6525 9 10.6525C8.13523 10.6525 7.38256 10.3866 6.75801 9.91733C5.68505 8.99443 4.9484 7.57097 3.23488 7.68047C1.44128 7.68047 0 9.10392 0 10.8402C0 12.5765 1.44128 14 3.23488 14H14.7651Z"
          fill="#FCFCFD"
        />
        <Path
          d="M14.7651 0C16.5587 0 18 1.42347 18 3.15977C18 4.89608 16.5587 6.31953 14.7651 6.31953C13.0676 6.42903 12.331 5.02121 11.242 4.08267C10.6335 3.61339 9.86477 3.34748 9 3.34748C8.13523 3.34748 7.38256 3.61339 6.75801 4.08267C5.68505 5.00557 4.9484 6.42903 3.23488 6.31953C1.44128 6.31953 0 4.89608 0 3.15977C0 1.42347 1.44128 0 3.23488 0H14.7651Z"
          fill="#FCFCFD"
        />
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
