import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Redirect, Link } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

import { Colors } from "@/constant/Colors";

import Card from "@/components/Card";

export default function RootPage() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.greeting}>Sugeng Rawuh,</Text>
        <Text style={styles.name}>Yogi!</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Link href="/level" style={{ flex: 1 }}>
            <View style={styles.learningBox}>
              <Text style={styles.text}>Belajar</Text>
            </View>
          </Link>
          <View style={styles.sideContainer}>
            <Link href="/kamus" style={styles.smallBox}>
              <View style={{ flex: 1 }}>
                <Text style={styles.text}>Kamus</Text>
              </View>
            </Link>
            <Link href="/peringkat" style={styles.smallBox}>
              <View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.text}>Peringkat</Text>
                </View>
              </View>
            </Link>
          </View>
        </View>
        <Text style={styles.subtitle}>Mau belajar apa hari ini?</Text>
        <View style={styles.optionsContainer}>
          <Card href="/belajar" text="Kamus" />
          <Card href="/belajar" text="Capaian" />
          <Card href="/belajar" text="Kuis" />
        </View>
        <View style={styles.largeBox}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.Blue50,
  },
  header: {
    backgroundColor: Colors.Blue500,
    padding: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  greeting: {
    fontSize: 14,
    color: Colors.White,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.White,
  },
  mainContainer: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 8,
  },
  learningBox: {
    flex: 1,
    backgroundColor: Colors.Blue500,
    borderRadius: 10,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  sideContainer: {
    flex: 1,
    justifyContent: "space-between",
    gap: 8,
  },
  smallBox: {
    flex: 1,
    backgroundColor: Colors.Blue500,
    borderRadius: 10,
    paddingLeft: 20,
    paddingTop: 12,
    height: 80,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 10,
  },
  largeBox: {
    backgroundColor: Colors.Blue500,
    height: 150,
    borderRadius: 10,
  },
  text: {
    color: Colors.White,
    fontSize: 18,
    fontWeight: "bold",
  },
});
