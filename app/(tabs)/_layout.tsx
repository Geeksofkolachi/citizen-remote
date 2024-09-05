import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeIcon from "@/assets/svgs/HomeIcon";
import ExploreIcon from "@/assets/svgs/ExploreIcon";
import EmailIcon from "@/assets/svgs/EmailIcon";
import NotificationIcon from "@/assets/svgs/NotificationIcon";
import MenuIcon from "@/assets/svgs/MenuIcon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].text,
        tabBarInactiveTintColor: "#8a8d98",
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon fill={color} focusable={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <ExploreIcon fill={color} focusable={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Message",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <EmailIcon fill={color} focusable={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Message",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <NotificationIcon fill={color} focusable={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <MenuIcon fill={color} focusable={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
