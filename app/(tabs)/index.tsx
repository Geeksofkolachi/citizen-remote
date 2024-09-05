import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Animated,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AnimtedAppBar } from "@/components/AnimatedAppbar";
import { TabView } from "@rneui/themed";
import { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 150);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -150],
  });
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor="#f8f8f8" barStyle="dark-content" />

      {AnimtedAppBar(translateY, tabIndex, setTabIndex, navigator)}
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
          }}
        >
          <TabView
            value={tabIndex}
            onChange={setTabIndex}
            containerStyle={{
              width: "100%",
              flex: 1,
            }}
          >
            <TabView.Item
              style={{
                width: "100%",
              }}
            >
              <ScrollView
                onScroll={(e) => {
                  scrollY.setValue(e.nativeEvent.contentOffset.y);
                }}
              >
                <View style={{ height: 150 }}></View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    gap: 8,
                    paddingHorizontal: 20,
                  }}
                >
                  <Image
                    source={require("@/assets/images/avatar.png")}
                    style={styles.logo}
                  />
                  <TextInput
                    placeholder="What's on your mind?"
                    placeholderTextColor="#5b5e68"
                    style={{
                      flex: 1,
                      backgroundColor: "#eff0f3",
                      borderRadius: 8,
                      borderWidth: 0,
                      paddingVertical: 6,
                      paddingHorizontal: 16,
                      fontSize: 16,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <TouchableOpacity>
                      <Image
                        source={require("@/assets/images/attach-image.png")}
                        style={{
                          width: 22,
                          height: 22,
                          resizeMode: "contain",
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require("@/assets/images/attach-gif.png")}
                        style={{
                          width: 22,
                          height: 22,
                          resizeMode: "contain",
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={require("@/assets/images/more-options.png")}
                        style={{
                          width: 22,
                          height: 22,
                          resizeMode: "contain",
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text>Recent</Text>
              </ScrollView>
            </TabView.Item>
            <TabView.Item style={{ width: "100%" }}>
              <Text>Favorite</Text>
            </TabView.Item>
            <TabView.Item style={{ width: "100%" }}>
              <Text>Cart</Text>
            </TabView.Item>
          </TabView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: 32,
    width: 32,
  },
});
