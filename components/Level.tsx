import { Text, View, ViewStyle, StyleSheet, StyleProp } from "react-native";
import { Link, LinkProps } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Level({
  text,
  icon,
  completed,
  style,
  href,
}: {
  text?: string;
  icon?: any;
  completed?: boolean;
  style?: StyleProp<ViewStyle>;
  href: LinkProps["href"];
}) {
  return (
    <Link href={href}>
      <View style={[styles.circleContainer, style]}>
        {completed ? (
          <FontAwesome
            name={icon}
            size={30}
            color="#FFFFFF"
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
    backgroundColor: "#EAF4FF",
    flex: 1,
    padding: 20,
  },
  circleContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#4285F4",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#EAF4FF",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    alignSelf: "center",
  },
});
