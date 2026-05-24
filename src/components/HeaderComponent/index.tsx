import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { View, TouchableOpacity } from "react-native";

const HeaderComponent: React.FC = (props: any) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 15,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
      <TouchableOpacity style={{}} onPress={() => props.navigation.openDrawer()}>
        <Feather name="menu" size={24} color="#fff" />
      </TouchableOpacity>
      {/* <Text style={{ textTransform: "uppercase", color: "#fff", flex: 1 }}>{props.options.title}</Text> */}
    </View>
  );
};

export default HeaderComponent;
