import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { Colors } from "@/constant/Colors";

export default function KamusPage() {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kamus</Text>
      <View style={styles.content}>
        <Text style={styles.text}>Indonesia</Text>
        <Text style={styles.text}>Jawa</Text>
      </View>

      <Input placeholder="Cari kata" value={search} onChangeText={setSearch} />
      <Button title="Cari" onPress={() => {}} />

      <View style={styles.resultContainer}>
        <Text style={styles.result}>Hasil</Text>
        <Text style={styles.translate}>Makan</Text>
        <Text>Mangan</Text>
        <Text>Mangan</Text>
        <Text>Mangan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    gap: 20,
    backgroundColor: Colors.Blue50,

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    fontSize: 16,
  },
  resultContainer: {
    width: "100%",
    backgroundColor: Colors.Blue50,
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
  },
  translate: {
    fontSize: 16,
    fontWeight: "500",
  },
});
