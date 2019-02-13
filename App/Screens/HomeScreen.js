import React from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import Colors from '../Resources/Colors';
import { Link } from "react-router-native";
import HomeScreenStyle from "../Resources/Styles/HomeScreenStyle";

/**
 * Created by Citrusbug.
 * User: Ishan Vyas-Crowdbotics
 * Date: 12/02/19
 * Time: 12:00 PM
 * Title : Home Screen
 * Description : This file contain App info with logo and place button to navigate to questions.
 */


class HomeScreen extends React.Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: 1, backgroundColor: Colors.white }}>
                    <View style={HomeScreenStyle.logo_view}>
                        <Image
                            source={require("../../assets/logo.png")}
                            style={{ width: 100, height: 100, tintColor: Colors.white }}
                        />
                        <Text style={HomeScreenStyle.app_name}>QuizApp</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={HomeScreenStyle.info_text}>You'll get 10 Questions and each oblige question have 1 mark.</Text>
                        <Text style={HomeScreenStyle.info_text}>You've to answer all the qeustions to understand your IQ level.</Text>
                        <Link to={`Questions`} style={HomeScreenStyle.button} underlayColor="#f0f4f7">
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Text style={HomeScreenStyle.button_text}>Start Quiz</Text>
                            </View>
                        </Link>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default HomeScreen;