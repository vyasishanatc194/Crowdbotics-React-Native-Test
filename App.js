import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, BackButton } from 'react-router-native'
import HomeScreen from "./App/Screens/HomeScreen";
import QuestionScreen from "./App/Screens/QuestionScreen";
export default class App extends React.Component {

  /**
 * Created by Citrusbug.
 * User: Ishan Vyas-Crowdbotics
 * Date: 12/02/19
 * Time: 12:00 PM
 * Title : Main App File
 * Description : This file contain navigation route about app.
 */

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
  }
});
