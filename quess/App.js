/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {ImageBackground, StyleSheet, View, Text} from "react-native";

import InputFromText from "./Components/InputFormText";

const App = () => {
  return (
    <>
      <ImageBackground
        style={styles.container}
        source={require("./img/image1.jpg")}>
        <View>
          <View>
            <Text style={styles.title}>Hashtag Generator</Text>
          </View>
          <View>
            <InputFromText />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    margin: 10,
    textAlign: "center",
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
});

export default App;
