import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/Constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "@/components/HeaderComponent";

const renderLayout = (props: any) => (
  <View style={{ flex: 1 }}>
    <LinearGradient
      colors={[Colors.firstLinerGradient, Colors.backgroundPrimary]}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    />
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent />
      {props.children}
    </SafeAreaView>
  </View>
);

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.itemMenuAtivo,
        drawerActiveTintColor: Colors.commonTextColor,
        drawerInactiveBackgroundColor: "transparent",
        drawerInactiveTintColor: Colors.inactiveTextColor,
      }}
      screenLayout={renderLayout}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Gerar senhas",
          title: "Gerar senhas",
        }}
      />
      <Drawer.Screen
        name="MyPass"
        options={{
          drawerLabel: "Minhas senhas",
          title: "Minhas senhas",
        }}
      />
      <Drawer.Screen
        name="About"
        options={{
          drawerLabel: "Sobre",
          title: "Sobre",
        }}
      />
    </Drawer>
  );
}
