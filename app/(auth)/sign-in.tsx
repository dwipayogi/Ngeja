import React from "react";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { Colors } from "@/constant/Colors";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ngeja</Text>
        <Text style={styles.tagline}>Aplikasi Pembelajaran Bahasa Jawa</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Email</Text>
        <Input
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Password</Text>
        <Input
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <Button title="Sign in" onPress={onSignInPress} />
      <View style={styles.linkContainer}>
        <Text style={styles.desc}>Don't have an account?</Text>
        <Link href="/sign-up" style={styles.link}>
          <Text>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 18,
    gap: 12,
  },
  textContainer: {
    width: "100%",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: Colors.Blue500,
  },
  tagline: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 8,
    fontStyle: "italic",
    color: Colors.Blue500,
  },
  label: {
    alignSelf: "flex-start",
    color: Colors.Blue500,
    fontWeight: "500",
  },
  linkContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: 12,
    alignSelf: "center",
  },
  desc: {
    color: Colors.Blue500,
  },
  link: {
    color: Colors.Blue800,
    fontWeight: "400",
  },
});
