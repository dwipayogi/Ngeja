import { Text, View, Image, StyleSheet } from "react-native";

import { Colors } from "@/constant/Colors";

type UserRankProps = {
  position: number;
  username: string;
  xp: number;
  avatar: string;
};

export function UserRank({ position, username, xp, avatar }: UserRankProps) {
  const getRankIcon = () => {
    switch (position) {
      // case 1:
      //   return <Crown className="w-6 h-6 text-yellow-500" />;
      // case 2:
      //   return <Medal className="w-6 h-6 text-gray-400" />;
      // case 3:
      //   return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <span className="text-lg font-bold text-gray-600">{position}</span>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.rankIcon}>{getRankIcon()}</View>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View>
        <Text style={styles.xp}>{xp.toLocaleString()} XP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  rankIcon: {
    marginRight: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  xp: {
    fontSize: 14,
    color: Colors.Blue700,
  },
});
