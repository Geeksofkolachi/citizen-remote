import { FontAwesome } from "@expo/vector-icons";
import { Tab } from "@rneui/themed";
import { Dispatch, SetStateAction } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

export const AnimtedAppBar = (
  translateY: any,
  tabIndex: number,
  setIndex: Dispatch<SetStateAction<number>>,
  navigation: any
) => {
  return (
    <Animated.View
      style={{
        justifyContent: "space-around",
        backgroundColor: "white",
        width: "100%",
        height: 150,
        transform: [{ translateY: translateY }],
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        elevation: 4,
        zIndex: 1,
      }}
    >
      <View
        style={{
          height: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
          paddingTop: 50,
          paddingBottom: 20,
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <FontAwesome name="search" size={34} color="#62636c" />
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "green",
        }}
      >
        <Tab
          value={tabIndex}
          onChange={(e) => setIndex(e)}
          containerStyle={{
            borderBottomWidth: 2,
            borderBottomColor: "#d8d9e0",
          }}
          indicatorStyle={{
            backgroundColor: "#1E1F24",
            height: 3,
          }}
          style={{
            backgroundColor: "white",
          }}
        >
          <Tab.Item
            title="My feed"
            titleStyle={{
              fontSize: 16,
              color: "#1E1F24",
            }}
          />
          <Tab.Item
            title="All posts"
            titleStyle={{
              fontSize: 16,
              color: "#1E1F24",
            }}
          />
          <Tab.Item
            title="Groups"
            titleStyle={{
              fontSize: 16,
              color: "#1E1F24",
            }}
          />
        </Tab>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    marginTop: 10,
  },
});
