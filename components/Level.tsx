import { Text, View, ViewStyle, StyleSheet, StyleProp } from "react-native";
import { Link, LinkProps } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

import { Colors } from "@/constant/Colors";

export default function Level({
  text,
  completed,
  style,
  href,
}: {
  text?: string;
  completed?: boolean;
  style?: StyleProp<ViewStyle>;
  href: LinkProps["href"];
}) {
  return (
    <Link href={href}>
      <View style={[styles.circleContainer, style]}>
        {completed ? (
          <FontAwesome
            name="star"
            size={48}
            color="#FFFF00"
            style={styles.icon}
          />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  circleContainer: {
    width: 80,
    height: 80,
    backgroundColor: Colors.Blue500,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.Blue400,
  },
  text: {
    color: Colors.White,
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    alignSelf: "center",
  },
});
