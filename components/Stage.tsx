import { View, StyleSheet } from "react-native";

import { Colors } from "@/constant/Colors";

export default function Stage({
  completed,
  children,
}: {
  completed: boolean;
  children?: React.ReactNode;
}) {
  return <View style={completed ? styles.stageCompleted : styles.stageUncompleted}>{children}</View>;
}

const styles = StyleSheet.create({
  stageCompleted: {
    width: 40,
    height: 8,
    backgroundColor: Colors.Blue500,
    borderRadius: 12,
  },
  stageUncompleted: {
    width: 40,
    height: 8,
    backgroundColor: Colors.Blue200,
    borderRadius: 12,
  },
});
