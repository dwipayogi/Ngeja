import { View, Text, StyleSheet } from "react-native";

import { Colors } from "@/constant/Colors";

export default function Header({material, level}: {material: string, level: string}) {
  return (
      <View style={styles.header}>
        <Text style={styles.material}>{material}</Text>
        <Text style={styles.level}>{level}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
header: {
    backgroundColor: Colors.Blue500,
    padding: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: "center",
  },
  material: {
    fontSize: 24,
    color: Colors.White,
    fontWeight: "bold",
  },
  level: {
    fontSize: 16,
    color: Colors.White,
  },
});