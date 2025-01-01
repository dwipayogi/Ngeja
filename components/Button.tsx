import { Pressable, Text, StyleSheet } from "react-native";

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
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});