import { Entypo } from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import * as Linking from "expo-linking";

interface IPostProps {
  disableImage?: boolean;
  disableComment?: boolean;
  title?: string;
  description?: string;
  link?: string;
  poll?: boolean;
}

export default function Post({
  disableImage,
  disableComment,
  title,
  description,
  link,
  poll,
}: IPostProps) {
  return (
    <View
      style={{
        display: "flex",
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 0,
        paddingLeft: 16,
        gap: 16,
        alignItems: "flex-start",
        alignSelf: "stretch",
        flexShrink: 0,
        flexWrap: "nowrap",
        backgroundColor: "#ffffff",
        position: "relative",
        borderTopColor: "#e7e8ec",
        borderTopWidth: 1,
        zIndex: 2,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          alignSelf: "stretch",
          flexShrink: 0,
          flexWrap: "nowrap",
          position: "relative",
          zIndex: 3,
        }}
      >
        <Image
          source={require("@/assets/images/c01080bd5342a4e1bd915f02e7155eeef47c02bd.png")}
          style={{
            width: 35,
            height: 35,
            borderRadius: 9999,
          }}
        />
        <View
          style={{
            display: "flex",
            gap: 4,
            alignItems: "flex-start",
            flexGrow: 1,
            flexShrink: 0,
            flexBasis: 0,
            flexWrap: "nowrap",
            position: "relative",
            zIndex: 6,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              alignSelf: "stretch",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 7,
            }}
          >
            <View
              style={{
                display: "flex",
                width: 139,
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
                flexShrink: 0,
                flexWrap: "nowrap",
                position: "relative",
                zIndex: 8,
              }}
            >
              <Text
                style={{
                  height: 20,
                  flexShrink: 0,
                  flexBasis: "auto",
                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "rgba(0, 1, 7, 0.88)",
                  position: "relative",
                  textAlign: "left",
                  zIndex: 9,
                }}
                numberOfLines={1}
              >
                Volodymyr Boiarinov
              </Text>
            </View>
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                flexBasis: "auto",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
                color: "#62636c",
                position: "relative",
                textAlign: "left",
                zIndex: 10,
              }}
              numberOfLines={1}
            >
              in
            </Text>
            <View
              style={{
                display: "flex",
                width: 83,
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
                flexShrink: 0,
                flexWrap: "nowrap",
                position: "relative",
                zIndex: 11,
              }}
            >
              <Image
                source={require("@/assets/images/fda962e0c502871da334579fc55217ea5684e2c6.png")}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                }}
              />
              <Text
                style={{
                  height: 20,
                  flexShrink: 0,
                  flexBasis: "auto",
                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "rgba(0, 1, 7, 0.88)",
                  position: "relative",
                  textAlign: "left",
                  zIndex: 14,
                }}
                numberOfLines={1}
              >
                Portugal
              </Text>
            </View>
          </View>
          <Text
            style={{
              height: 16,
              alignSelf: "stretch",
              flexShrink: 0,
              flexBasis: "auto",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 16,
              color: "#62636c",
              position: "relative",
              textAlign: "left",
              zIndex: 15,
            }}
            numberOfLines={1}
          >
            August 13, 11:09 AM
          </Text>
        </View>
        <TouchableOpacity
          style={{
            display: "flex",
            width: 22,
            paddingTop: 2,
            paddingRight: 2,
            paddingBottom: 2,
            paddingLeft: 2,
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            flexShrink: 0,
            flexWrap: "nowrap",
            position: "relative",
            zIndex: 16,
          }}
        >
          <Entypo name="dots-three-vertical" size={18} color="#62636c" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          gap: 4,
          alignItems: "flex-start",
          alignSelf: "stretch",
          flexShrink: 0,
          flexWrap: "nowrap",
          position: "relative",
          zIndex: 19,
        }}
      >
        <Text
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexShrink: 0,
            fontSize: 16,
            fontWeight: "600",
            lineHeight: 24,
            color: "#1e1f24",
            position: "relative",
            textAlign: "left",
            zIndex: 20,
          }}
        >
          {title ||
            "Digital nomad visa in Portugal - my experience as web developer"}
        </Text>
        <Text
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexShrink: 0,
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 24,
            color: "#1e1f24",
            position: "relative",
            textAlign: "left",
            zIndex: 21,
          }}
        >
          {description ||
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
        </Text>
      </View>
      {poll ? (
        <View
          style={{
            display: "flex",
            paddingTop: 12,
            paddingRight: 12,
            paddingBottom: 12,
            paddingLeft: 12,
            gap: 12,
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexShrink: 0,
            flexWrap: "nowrap",
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderWidth: 1,
            borderColor: "rgba(0, 11, 54, 0.09)",
            borderStyle: "solid",
            position: "relative",
            zIndex: 191,
          }}
        >
          <Text
            style={{
              display: "flex",
              width: 314,
              height: 20,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexShrink: 0,
              flexBasis: "auto",

              fontSize: 14,
              fontWeight: "600",
              lineHeight: 20,
              color: "rgba(0, 1, 7, 0.88)",
              position: "relative",
              textAlign: "left",
              overflow: "hidden",
              zIndex: 192,
            }}
            numberOfLines={1}
          >
            What’s the best burger in Mc Donalds?
          </Text>
          <View
            style={{
              display: "flex",
              gap: 4,
              alignItems: "flex-start",
              alignSelf: "stretch",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 193,
            }}
          >
            <View
              style={{
                display: "flex",
                paddingTop: 8,
                paddingRight: 12,
                paddingBottom: 8,
                paddingLeft: 12,
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                alignSelf: "stretch",
                flexShrink: 0,
                flexWrap: "nowrap",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                borderBottomLeftRadius: 6,
                borderWidth: 1,
                borderColor: "rgba(0, 11, 54, 0.09)",
                borderStyle: "solid",
                position: "relative",
                zIndex: 194,
              }}
            >
              <View
                style={{
                  width: 159,
                  height: 36,
                  flexShrink: 0,
                  backgroundColor: "rgba(0, 16, 64, 0.06)",
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                  borderBottomLeftRadius: 6,
                  position: "absolute",
                  top: -1,
                  left: -1,
                  zIndex: 195,
                }}
              />
              <View
                style={{
                  width: 16,
                  height: 16,
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 196,
                }}
              >
                <ImageBackground
                  style={{
                    width: 13.333,
                    height: 13.333,
                    position: "relative",
                    zIndex: 197,
                    marginTop: 1.333,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.333,
                  }}
                  source={require("@/assets/images/check-icon.png")}
                />
              </View>
              <Text
                style={{
                  height: 20,
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: "auto",

                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "rgba(0, 1, 7, 0.88)",
                  position: "relative",
                  textAlign: "left",
                  overflow: "hidden",
                  zIndex: 198,
                }}
                numberOfLines={1}
              >
                Cheesburger
              </Text>
              <Text
                style={{
                  height: 20,
                  flexShrink: 0,
                  flexBasis: "auto",

                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "#62636c",
                  position: "relative",
                  textAlign: "left",
                  overflow: "hidden",
                  zIndex: 199,
                }}
                numberOfLines={1}
              >
                25%
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                paddingTop: 8,
                paddingRight: 12,
                paddingBottom: 8,
                paddingLeft: 12,
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                alignSelf: "stretch",
                flexShrink: 0,
                flexWrap: "nowrap",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                borderBottomLeftRadius: 6,
                borderWidth: 1,
                borderColor: "rgba(0, 11, 54, 0.09)",
                borderStyle: "solid",
                position: "relative",
                zIndex: 200,
              }}
            >
              <View
                style={{
                  width: 126,
                  height: 36,
                  flexShrink: 0,
                  backgroundColor: "rgba(0, 16, 64, 0.06)",
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                  borderBottomLeftRadius: 6,
                  position: "absolute",
                  top: -1,
                  left: -1,
                  zIndex: 201,
                }}
              />
              <View
                style={{
                  width: 12,
                  height: 12,
                  flexShrink: 0,
                  borderTopLeftRadius: 17,
                  borderTopRightRadius: 17,
                  borderBottomRightRadius: 17,
                  borderBottomLeftRadius: 17,
                  borderWidth: 2,
                  borderColor: "rgba(0, 8, 48, 0.27)",
                  borderStyle: "solid",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 202,
                }}
              />
              <Text
                style={{
                  height: 20,
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: "auto",

                  fontSize: 14,
                  fontWeight: "400",
                  lineHeight: 20,
                  color: "rgba(0, 1, 7, 0.88)",
                  position: "relative",
                  textAlign: "left",
                  overflow: "hidden",
                  zIndex: 203,
                }}
                numberOfLines={1}
              >
                Big mac
              </Text>
              <Text
                style={{
                  height: 20,
                  flexShrink: 0,
                  flexBasis: "auto",

                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "#62636c",
                  position: "relative",
                  textAlign: "left",
                  overflow: "hidden",
                  zIndex: 204,
                }}
                numberOfLines={1}
              >
                24%
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                paddingTop: 8,
                paddingRight: 12,
                paddingBottom: 8,
                paddingLeft: 12,
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                alignSelf: "stretch",
                flexShrink: 0,
                flexWrap: "nowrap",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                borderBottomLeftRadius: 6,
                borderWidth: 1,
                borderColor: "rgba(0, 11, 54, 0.09)",
                borderStyle: "solid",
                position: "relative",
                zIndex: 205,
              }}
            >
              <View
                style={{
                  width: 126,
                  height: 36,
                  flexShrink: 0,
                  backgroundColor: "rgba(0, 16, 64, 0.06)",
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                  borderBottomLeftRadius: 6,
                  position: "absolute",
                  top: -1,
                  left: -1,
                  zIndex: 206,
                }}
              />
              <View
                style={{
                  width: 12,
                  height: 12,
                  flexShrink: 0,
                  borderTopLeftRadius: 17,
                  borderTopRightRadius: 17,
                  borderBottomRightRadius: 17,
                  borderBottomLeftRadius: 17,
                  borderWidth: 2,
                  borderColor: "rgba(0, 8, 48, 0.27)",
                  borderStyle: "solid",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 207,
                }}
              />
              <Text
                style={{
                  height: 20,
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: "auto",

                  fontSize: 14,
                  fontWeight: "400",
                  lineHeight: 20,
                  color: "rgba(0, 1, 7, 0.88)",
                  position: "relative",
                  textAlign: "left",
                  overflow: "hidden",
                  zIndex: 208,
                }}
                numberOfLines={1}
              >
                Other
              </Text>
              <Text
                style={{
                  height: 20,
                  flexShrink: 0,
                  flexBasis: "auto",

                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "#62636c",
                  position: "relative",
                  textAlign: "left",
                  overflow: "hidden",
                  zIndex: 209,
                }}
                numberOfLines={1}
              >
                24%
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 210,
            }}
          >
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                flexBasis: "auto",

                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
                color: "rgba(0, 1, 7, 0.88)",
                position: "relative",
                textAlign: "left",
                overflow: "hidden",
                zIndex: 211,
              }}
              numberOfLines={1}
            >
              25 votes
            </Text>
            <View
              style={{
                display: "flex",
                width: 69,
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
                flexShrink: 0,
                flexWrap: "nowrap",
                position: "relative",
                zIndex: 212,
              }}
            >
              <Text
                style={{
                  height: 20,
                  flexShrink: 0,
                  flexBasis: "auto",

                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "rgba(0, 2, 17, 0.62)",
                  position: "relative",
                  textAlign: "left",
                  zIndex: 213,
                }}
                numberOfLines={1}
              >
                Undo vote
              </Text>
            </View>
          </View>
        </View>
      ) : null}
      {link ? (
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://${link}`)}
          style={{
            display: "flex",
            height: 268,
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexShrink: 0,
            flexWrap: "nowrap",
            backgroundColor: "rgba(0, 16, 64, 0.06)",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
            position: "relative",
            overflow: "hidden",
            zIndex: 135,
          }}
        >
          <ImageBackground
            style={{
              alignSelf: "stretch",
              flexGrow: 1,
              flexShrink: 0,
              flexBasis: 0,
              position: "relative",
              zIndex: 136,
            }}
            source={require("@/assets/images/2404b06075bcc4ba3f2f0130657c7156eac110c6.png")}
            resizeMode="cover"
          />
          <View
            style={{
              display: "flex",
              paddingTop: 12,
              paddingRight: 12,
              paddingBottom: 12,
              paddingLeft: 12,
              alignItems: "flex-start",
              alignSelf: "stretch",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 137,
            }}
          >
            <Text
              style={{
                height: 20,
                alignSelf: "stretch",
                flexShrink: 0,
                flexBasis: "auto",

                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                color: "#62636c",
                position: "relative",
                textAlign: "left",
                zIndex: 138,
              }}
              numberOfLines={1}
            >
              {link}
            </Text>
            <Text
              style={{
                height: 24,
                alignSelf: "stretch",
                flexShrink: 0,
                flexBasis: "auto",

                fontSize: 16,
                fontWeight: "600",
                lineHeight: 24,
                color: "#1e1f24",
                position: "relative",
                textAlign: "left",
                zIndex: 139,
              }}
              numberOfLines={1}
            >
              Link title here
            </Text>
          </View>
        </TouchableOpacity>
      ) : null}
      {!disableImage ? (
        <View
          style={{
            display: "flex",
            height: 230,
            flexDirection: "row",
            gap: 8,
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexShrink: 0,
            flexWrap: "nowrap",
            position: "relative",
            zIndex: 22,
          }}
        >
          <View
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              alignSelf: "stretch",
              flexGrow: 1,
              flexShrink: 0,
              flexBasis: 0,
              flexWrap: "nowrap",
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              position: "relative",
              overflow: "hidden",
              zIndex: 23,
            }}
          >
            <ImageBackground
              style={{
                alignSelf: "stretch",
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: 0,
                position: "relative",
                zIndex: 24,
              }}
              source={require("@/assets/images/2404b06075bcc4ba3f2f0130657c7156eac110c6.png")}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              alignSelf: "stretch",
              flexGrow: 1,
              flexShrink: 0,
              flexBasis: 0,
              flexWrap: "nowrap",
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              position: "relative",
              overflow: "hidden",
              zIndex: 25,
            }}
          >
            <ImageBackground
              style={{
                alignSelf: "stretch",
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: 0,
                position: "relative",
                zIndex: 26,
              }}
              source={require("@/assets/images/2404b06075bcc4ba3f2f0130657c7156eac110c6.png")}
              resizeMode="cover"
            />
          </View>
        </View>
      ) : null}
      <View
        style={{
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
          alignSelf: "stretch",
          flexShrink: 0,
          flexWrap: "nowrap",
          position: "relative",
          zIndex: 27,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            flexShrink: 0,
            flexWrap: "nowrap",
            position: "relative",
            zIndex: 28,
          }}
        >
          <View
            style={{
              display: "flex",
              width: 160,
              flexDirection: "row",
              // gap: 12,
              alignItems: "center",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 29,
            }}
          >
            <View
              style={{
                display: "flex",
                width: 56,
                flexDirection: "row",
                gap: -8,
                alignItems: "center",
                flexShrink: 0,
                flexWrap: "nowrap",
                position: "relative",
                zIndex: 30,
              }}
            >
              <Image
                source={require("@/assets/images/c01080bd5342a4e1bd915f02e7155eeef47c02bd.png")}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 9999,
                }}
              />
              <Image
                source={require("@/assets/images/28c5a2b536193fc9ec989c44ac28ff8514051cfd.png")}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 9999,
                  marginLeft: -12,
                }}
              />
              <Image
                source={require("@/assets/images/dda133db1cbe6c448febd1e0e3282d375756493e.png")}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 9999,
                  marginLeft: -12,
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                width: 92,
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
                flexShrink: 0,
                flexWrap: "nowrap",
                position: "relative",
                zIndex: 37,
              }}
            >
              <Text
                style={{
                  height: 20,
                  flexShrink: 0,
                  flexBasis: "auto",
                  fontSize: 14,
                  fontWeight: "500",
                  lineHeight: 20,
                  color: "rgba(0, 2, 17, 0.62)",
                  position: "relative",
                  textAlign: "left",
                  zIndex: 38,
                }}
                numberOfLines={1}
              >
                and 78 others
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              width: 84,
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 39,
            }}
          >
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                flexBasis: "auto",
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                color: "rgba(0, 2, 17, 0.62)",
                position: "relative",
                textAlign: "left",
                zIndex: 40,
              }}
              numberOfLines={1}
            >
              4 comments
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            alignSelf: "stretch",
            flexShrink: 0,
            flexWrap: "nowrap",
            position: "relative",
            borderTopColor: "#e7e8ec",
            borderTopWidth: 1,
            paddingTop: 10,
            zIndex: 43,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              height: 32,
              paddingTop: 0,
              paddingRight: 12,
              paddingBottom: 0,
              paddingLeft: 12,
              flexDirection: "row",
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              flexShrink: 0,
              flexBasis: 0,
              flexWrap: "nowrap",
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
              borderBottomLeftRadius: 6,
              position: "relative",
              zIndex: 44,
            }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                zIndex: 45,
              }}
            >
              <ImageBackground
                style={{
                  width: 15,
                  height: 13.5,
                  position: "relative",
                  zIndex: 46,
                  marginTop: 2.25,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 1.5,
                }}
                source={require("@/assets/images/like-icon.png")}
              />
            </View>
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                flexBasis: "auto",
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                color: "#1e1f24",
                position: "relative",
                textAlign: "left",
                zIndex: 47,
              }}
              numberOfLines={1}
            >
              Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              height: 32,
              paddingTop: 0,
              paddingRight: 12,
              paddingBottom: 0,
              paddingLeft: 12,
              flexDirection: "row",
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              flexShrink: 0,
              flexBasis: 0,
              flexWrap: "nowrap",
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
              borderBottomLeftRadius: 6,
              position: "relative",
              zIndex: 48,
            }}
          >
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              resizeMode="contain"
              source={require("@/assets/images/comments-icon.png")}
            />
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                flexBasis: "auto",
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                color: "#1e1f24",
                position: "relative",
                textAlign: "left",
                zIndex: 51,
              }}
              numberOfLines={1}
            >
              Comment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              height: 32,
              paddingTop: 0,
              paddingRight: 12,
              paddingBottom: 0,
              paddingLeft: 12,
              flexDirection: "row",
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              flexShrink: 0,
              flexBasis: 0,
              flexWrap: "nowrap",
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
              borderBottomLeftRadius: 6,
              position: "relative",
              zIndex: 52,
            }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                zIndex: 53,
              }}
            >
              <ImageBackground
                style={{
                  width: 16.5,
                  height: 13.5,
                  position: "relative",
                  zIndex: 54,
                  marginTop: 2.25,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0.75,
                }}
                source={require("@/assets/images/share-icon.png")}
              />
            </View>
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                flexBasis: "auto",
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                color: "#1e1f24",
                position: "relative",
                textAlign: "left",
                zIndex: 55,
              }}
              numberOfLines={1}
            >
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {!disableComment ? (
        <View
          style={{
            display: "flex",
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            flexDirection: "row",
            gap: 12,
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexShrink: 0,
            flexWrap: "nowrap",
            backgroundColor: "rgba(0, 16, 64, 0.06)",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius: 12,
            position: "relative",
            zIndex: 56,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              flexShrink: 0,
              borderTopLeftRadius: 9999,
              borderTopRightRadius: 9999,
              borderBottomRightRadius: 9999,
              borderBottomLeftRadius: 9999,
              position: "relative",
              zIndex: 57,
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 9999,
                borderTopRightRadius: 9999,
                borderBottomRightRadius: 9999,
                borderBottomLeftRadius: 9999,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 58,
              }}
              source={require("@/assets/images/28c5a2b536193fc9ec989c44ac28ff8514051cfd.png")}
              resizeMode="cover"
            />
          </View>
          <View
            style={{
              display: "flex",
              width: 142,
              justifyContent: "center",
              alignItems: "flex-start",
              flexShrink: 0,
              flexWrap: "nowrap",
              position: "relative",
              zIndex: 59,
            }}
          >
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                flexBasis: "auto",
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                color: "#1e1f24",
                position: "relative",
                textAlign: "left",
                zIndex: 60,
              }}
              numberOfLines={1}
            >
              Jane Smith
            </Text>
            <Text
              style={{
                height: 20,
                flexShrink: 0,
                flexBasis: "auto",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
                color: "#62636c",
                position: "relative",
                textAlign: "left",
                zIndex: 61,
              }}
              numberOfLines={1}
            >
              Welcome to Portugal!
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    marginTop: 50,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
