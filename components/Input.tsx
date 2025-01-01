import { TextInput, StyleSheet } from "react-native";

export default function Input({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
}: {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}) {
  return (
    <TextInput
      autoCapitalize="none"
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
  },
});