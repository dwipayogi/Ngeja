import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Redirect } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { Colors } from "@/constant/Colors";

export default function ProfilPage() {
  const { user, isLoaded } = useUser();
  const [username, setUsername] = useState(user?.username ?? "");
  const [email, setEmail] = useState(user?.primaryEmailAddress?.emailAddress ?? "");

  if (!isLoaded) return null;
  if (!user) return null;

  const updateUser = async () => {
    await user.update({
      username: username,
      primaryEmailAddressId: email,
    })
  }

  const deleteUser = async () => {
    await user.delete();
    <Redirect href="/sign-in" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profil Akun</Text>

      <View style={styles.profilePicture}>
        {/* <Image
          style={styles.profileImage}
          source={require('@/assets/images/icon.png')}
        /> */}
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <Input placeholder="Masukkan username" value={username} onChangeText={setUsername} />

        <Text style={styles.label}>Email</Text>
        <Input placeholder="Masukkan email" value={email} onChangeText={setEmail}/>
      </View>

      <View style={styles.deleteSection}>
        <Text style={styles.deleteTitle}>Hapus Akun</Text>
        <Text style={styles.deleteDescription}>
          Menghapus Akun Pribadi Anda dan semua isinya secara permanen. Tindakan
          ini tidak dapat dikembalikan, jadi silakan lanjutkan dengan hati-hati.
        </Text>
        <Button title="Hapus Akun" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue50,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.Blue500,
    marginBottom: 20,
  },
  profilePicture: {
    alignSelf: "center",
    marginBottom: 30,
    width: 80,
    height: 80,
    backgroundColor: "#C4C4C4",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  form: {
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.Blue500,
    marginBottom: 5,
  },
  deleteSection: {
    marginTop: 20,
  },
  deleteTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.Blue500,
    marginBottom: 10,
  },
  deleteDescription: {
    fontSize: 14,
    color: Colors.Black,
    marginBottom: 20,
  },
});
