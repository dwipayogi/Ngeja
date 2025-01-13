import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { Colors } from "@/constant/Colors";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [userName, setUserName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        username: userName,
        emailAddress,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Verify your email</Text>
        <Input
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <Button title="Verify" onPress={onVerifyPress} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ngeja</Text>
        <Text style={styles.tagline}>Aplikasi Pembelajaran Bahasa Jawa</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Username</Text>
        <Input
          value={userName}
          placeholder="Enter username"
          onChangeText={(userName) => setUserName(userName)}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Email</Text>
        <Input
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={(email) => setEmailAddress(email)}
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

      <Button title="Continue" onPress={onSignUpPress} />
      <View style={styles.linkContainer}>
        <Text style={styles.desc}>Already have an account?</Text>
        <Link href="/sign-in" style={styles.link}>
          <Text>Sign in</Text>
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
