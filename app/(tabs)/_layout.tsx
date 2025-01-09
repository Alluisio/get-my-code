import React from "react";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarActiveBackgroundColor:
          Colors[colorScheme ?? "light"].tabBarBackgroundColor,
        tabBarInactiveBackgroundColor:
          Colors[colorScheme ?? "light"].tabBarBackgroundColor,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "New code",
          tabBarIcon: ({ color }) => <TabBarIcon name="lock" color={color} />,
        }}
      />
      <Tabs.Screen
        name="codes"
        options={{
          title: "My codes",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="menu-fold" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
