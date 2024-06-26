import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textStyle.container2}>
        My name is <Text style={textStyle.container}>Senyo Dedoo</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
    alignItems: "center",
    justifyContent: "center",
  },
});

const textStyle = StyleSheet.create({
  container: {
    fontWeight: "bold",
  },
  container2: {
    color: "#DBDBDB",
    fontSize: 24,
  },
});
