import { ScrollView, Text, View, StyleSheet } from "react-native";

import { UserRank } from "@/components/Rank";

import { Colors } from "@/constant/Colors";

export default function PeringkatPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Papan Peringkat</Text>
      <ScrollView>
        <UserRank
          position={1}
          username="Yogi"
          xp={1000}
          avatar="https://randomuser.me/api/photo?seed=1"
        />
        <UserRank
          position={2}
          username="Yogi"
          xp={1000}
          avatar="https://randomuser.me/api/photo?seed=2"
        />
        <UserRank
          position={3}
          username="Yogi"
          xp={1000}
          avatar="https://randomuser.me/api/photo?seed=3"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.Blue50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.Blue500,
    textAlign: "center",
    marginBottom: 20,
  },
});
