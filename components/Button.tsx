import { Pressable, Text, StyleSheet} from "react-native";

import { Colors } from "@/constant/Colors";

export default function Button({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Blue500,
    padding: 12,
    borderRadius: 5,
    minWidth: 100,
  },
  text: {
    color: Colors.Blue50,
    textAlign: "center",
  },
});
