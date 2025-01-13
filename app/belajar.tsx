import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "@/constant/Colors";

import Header from "@/components/Header";
import Stage from "@/components/Stage";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function BelajarPage() {
  const [answer, setAnswer] = useState("");
  const [check, setCheck] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    setCheck(true);
    setIsCorrect(false);
  };

  return (
    <>
      <Header material="Kosa Kata" level="level 1" />
      <View style={styles.container}>
        <View>
          <View style={styles.stageContainer}>
            <Stage completed={true} />
            <Stage completed={true} />
            <Stage completed={false} />
            <Stage completed={false} />
            <Stage completed={false} />
          </View>

          <View style={styles.questionContainer}>
            <Text style={styles.question}>Apa Arti Kalimat ini?</Text>
            <View style={styles.questionDetailContainer}>
              <Text style={styles.questionDetail}>
                Sugeng enjing, pripun kabare panjenengan?
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.answerContainer}>
          {check ? (
            <View>
              {isCorrect ? (
                <View style={styles.trueAnswer}>
                  <Text style={styles.true}>Benar</Text>
                  <Text>Artinya: Selamat pagi, bagaimana kabar Anda?</Text>
                </View>
              ) : (
                <View style={styles.wrongAnswer}>
                  <Text style={styles.wrong}>Salah</Text>
                  <Text>Coba lagi</Text>
                </View>
              )}
            </View>
          ) : (
            <View></View>
          )}

          <Input
            value={answer}
            placeholder="Jawaban Anda"
            onChangeText={setAnswer}
          />
          <Button
            title="Jawab"
            onPress={checkAnswer}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: Colors.Blue50,
  },
  stageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  questionContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
  },
  questionDetailContainer: {
    backgroundColor: Colors.Blue200,
    borderRadius: 12,
    padding: 20,
    marginTop: 12,
  },
  questionDetail: {
    color: Colors.Black,
  },
  answerContainer: {
    marginTop: 20,
    gap: 12,
  },
  trueAnswer: {
    backgroundColor: "rgba(0, 189, 41, 0.25)",
    padding: 20,
    borderRadius: 12,
  },
  true: {
    color: "rgba(0, 189, 41, 1)",
    fontWeight: "bold",
    fontSize: 28,
  },
  wrongAnswer: {
    backgroundColor: "rgba(255, 0, 0, 0.25)",
    padding: 20,
    borderRadius: 12,
  },
  wrong: {
    color: "rgba(255, 0, 0, 1)",
    fontWeight: "bold",
    fontSize: 28,
  },
});
