import { View, ScrollView, StyleSheet } from "react-native";

import Header from "@/components/Header";
import Level from "@/components/Level";

import { Colors } from "@/constant/Colors";

export default function LevelPage() {
  return (
    <View style={styles.container}>
      <Header material="Level" />
      <ScrollView style={styles.content} showsHorizontalScrollIndicator={false}>
        <Level completed style={styles.button1} href="/belajar" />
        <Level text="2" style={styles.button2} href="/belajar" />
        <Level text="3" style={styles.button3} href="/belajar" />
        <Level text="4" style={styles.button4} href="/belajar" />
        <Level text="5" style={styles.button5} href="/belajar" />
        <Level text="6" style={styles.button6} href="/belajar" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue50,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: Colors.Blue500,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  button1: {
    top: 50,
    left: 50,
  },
  button2: {
    top: 150,
    left: 150,
  },
  button3: {
    top: 250,
    left: 50,
  },
  button4: {
    top: 350,
    left: 150,
  },
  button5: {
    top: 450,
    left: 50,
  },
  button6: {
    top: 550,
    left: 150,
  },
});
