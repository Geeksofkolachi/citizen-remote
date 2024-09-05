import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function ExploreIcon(props: any) {
  return (
    <View style={styles.container}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.1343 9.07463C2.83086 9.99478 2.66666 10.9782 2.66666 12C2.66666 17.1547 6.84534 21.3333 12 21.3333C17.1547 21.3333 21.3333 17.1547 21.3333 12C21.3333 8.03809 18.8647 4.65274 15.3818 3.2982L14.6003 6.42323C14.2929 7.6528 13.3337 8.61337 12.1045 8.92257L9.56893 9.56044C9.46528 9.58652 9.37809 9.65635 9.33001 9.7518C8.57305 11.2544 6.64149 11.707 5.29584 10.697L3.1343 9.07463ZM4.16296 6.92925L6.6965 8.83082C6.87985 8.96843 7.14302 8.90677 7.24616 8.70203C7.59905 8.00152 8.239 7.48897 8.99968 7.29761L11.5353 6.65974C11.93 6.56046 12.238 6.25202 12.3367 5.8572L13.4685 6.14022L12.3367 5.8572L13.1179 2.73294C12.7514 2.68919 12.3783 2.66668 12 2.66668C8.71492 2.66668 5.82624 4.36387 4.16296 6.92925ZM0.333328 12C0.333328 5.55669 5.55667 0.333344 12 0.333344C18.4433 0.333344 23.6667 5.55669 23.6667 12C23.6667 18.4433 18.4433 23.6667 12 23.6667C5.55667 23.6667 0.333328 18.4433 0.333328 12ZM9.72224 12.6341C10.2429 12.1153 10.9613 11.845 11.6948 11.8918L12.6594 11.9534C13.2666 11.9921 13.8525 12.1913 14.3575 12.5306L15.9573 13.6056C17.1518 14.4083 17.5643 15.9733 16.9207 17.2605C16.436 18.23 15.4451 18.8424 14.3612 18.8424H13.2183C12.0692 18.8424 10.9961 18.2681 10.3586 17.3119L9.39867 15.872C8.71989 14.8538 8.8554 13.4978 9.72224 12.6341ZM11.5462 14.2204C11.4804 14.2162 11.4159 14.2405 11.3692 14.287C11.2914 14.3646 11.2792 14.4863 11.3401 14.5777L12.3001 16.0176C12.5048 16.3246 12.8493 16.509 13.2183 16.509H14.3612C14.5613 16.509 14.7442 16.396 14.8337 16.217C14.9525 15.9794 14.8764 15.6905 14.6558 15.5423L13.0561 14.4673C12.8939 14.3584 12.7058 14.2944 12.5108 14.282L11.5462 14.2204Z"
          fill-opacity="0.4549"
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
