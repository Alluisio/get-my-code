import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { View, TouchableOpacity } from "react-native";

const HeaderComponent: React.FC = () => {
  return (
    <View
      style={{ paddingHorizontal: 20, paddingTop: 15, backgroundColor: "red" }}
    >
      <TouchableOpacity style={{}}>
        <Feather name="menu" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
