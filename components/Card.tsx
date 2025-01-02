import { View, Text, StyleSheet } from "react-native";
import { Link, LinkProps } from "expo-router";

import { Colors } from "@/constant/Colors";

export default function Card({ href, text }: { href: LinkProps["href"], text: string }) {
  return (
    <Link href={href} style={{ flex: 1 }}>
      <View style={styles.optionBox}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  optionBox: {
    width: "100%",
    backgroundColor: Colors.Blue500,
    borderRadius: 10,
    height: 160,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: Colors.White,
    fontSize: 14,
    paddingBottom: 8,
  },
});
