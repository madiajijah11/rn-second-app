import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const [userNumber, setUserNumber] = useState();

const startGameHandler = selectedNumber => {
  setUserNumber(selectedNumber);
}

let content = <StartGameScreen onStartGame={startGameHandler} />;

if (userNumber) {
  content = <GameScreen userChoice={userNumber} />;
}

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess Number Games" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
