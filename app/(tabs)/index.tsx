import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function TabCreateCodeScreen() {
  return (
    <View style={styles.container}>
      <Text>Gerar novo código criptografado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
