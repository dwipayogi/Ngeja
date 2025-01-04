import { Text, View, ScrollView, StyleSheet } from "react-native";

import Header from "@/components/Header";
import Level from "@/components/Level";

export default function LevelPage() {
  return (
    <View style={styles.container}>
      <Header material="Level" />
      <ScrollView style={styles.content}>
        <Level icon="star" style={styles.button1} href="/belajar" />
        <Level icon="star" style={styles.button2} href="/belajar" />
        <Level icon="star" style={styles.button3} href="/belajar" />
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
    backgroundColor: '#EAF4FF',
  },
  header: {
    backgroundColor: '#4285F4',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  circleContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#4285F4',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#EAF4FF',
    position: 'absolute',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
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
