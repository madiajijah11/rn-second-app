import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Please Input the Number</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} />
        <View style={styles.buttonContainer}>
          <Button style={{ color: "red" }} title="Reset" onPress={() => {}} />
          <Button title="Start Game" onPress={() => {}} />
        </View>
      </View>
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
});

export default StartGameScreen;
