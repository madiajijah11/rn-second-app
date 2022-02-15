import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Card from "../components/Card";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Please Input the Number</Text>
        <TextInput style={styles.inputText} />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSize}>
            <Button color="red" title="Reset" onPress={() => {}} />
          </View>
          <View style={styles.buttonSize}>
            <Button title="Start Game" onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  inputText: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  buttonSize: {
    width: 100,
  }
});

export default StartGameScreen;
