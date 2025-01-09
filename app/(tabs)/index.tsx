import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Text, View } from "@/components/Themed";
import LogoSvgComponent from "@/assets/images/LogoSvgComponent";
import LinkSvgComponent from "@/assets/images/LinkSvgComponent";

export default function TabCreateCodeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1DDBB9", "#132742"]}
        style={styles.linearGradient}
      />
      <View style={styles.content}>
        <LogoSvgComponent />
        <Text style={styles.projectName}>Get my code</Text>
        <View style={styles.actions}>
          <View style={styles.inputContainer}>
            <LinkSvgComponent style={styles.linkSvg} />

            <TextInput
              style={styles.inputCode}
              placeholder="Enter the code here..."
              placeholderTextColor="#fff"
              selectionColor="#1DDBB9"
            />
          </View>
          <TouchableOpacity style={styles.buttonSave}>
            <Text style={styles.buttonSaveText}>Save code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  content: {
    flex: 0,
    height: "70%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  projectName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  actions: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  linkSvg: { position: "absolute", top: 14, left: 14 },
  inputContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    width: "100%",
    position: "relative",
  },
  inputCode: {
    backgroundColor: "#FFFFFF26",
    borderRadius: 7,
    paddingHorizontal: 12,
    paddingVertical: 16,
    height: 54,
    fontSize: 18,
    paddingLeft: 45,
    width: "100%",
    borderColor: "#14384D",
    borderWidth: 1,
  },
  buttonSave: {
    width: "100%",
    height: 54,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    borderRadius: 7,
    borderColor: "#14384D",
    borderWidth: 1,
  },
  buttonSaveText: {
    textAlign: "center",
    color: "#000",
    fontSize: 16,
  },
});
