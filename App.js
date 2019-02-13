import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, BackButton } from 'react-router-native'
import HomeScreen from "./App/Screens/HomeScreen";
import QuestionScreen from "./App/Screens/QuestionScreen";
export default class App extends React.Component {


  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <BackButton />
          <Route path='/questions' component={QuestionScreen} />
          <Route exact path='/' component={HomeScreen} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    marginTop: 22,
  },

  welcome: {
    fontSize: 22,
    fontWeight: "bold"
  },

  paragraph: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    padding: 10,
    marginTop: 15,
    lineHeight: 25
  }
});
