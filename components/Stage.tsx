import { View, StyleSheet } from "react-native";

import { Colors } from "@/constant/Colors";

export default function Stage({ children }: { children?: React.ReactNode }) {
  return <View style={styles.stage}>{children}</View>;
}

const styles = StyleSheet.create({
  stage: {
    width: 40,
    height: 8,
    backgroundColor: Colors.Blue500,
    borderRadius: 12,
  },
});