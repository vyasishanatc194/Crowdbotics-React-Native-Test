import React from 'react'
import { View, Text, ActivityIndicator, Button, SafeAreaView, TouchableOpacity } from "react-native";
import ApiUrl from '../Network/ApiUrl';
import Colors from '../Resources/Colors';
import Question from '../Components/Question';

class QuestionScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            questions: [],

            current: 0,
            correctScore: 5,
            totalScore: 50,

            results: {
                score: 0,
                correctAnswers: 0
            },
            completed: false
        };
    }

    fetchQuestions = async () => {
        await this.setState({ loading: true });
        const response = await fetch(ApiUrl.MULTIPLE);
        const questions = await response.json();

        const { results } = questions;

        results.forEach(item => {
            item.id = Math.floor(Math.random() * 10000);
        });

        await this.setState({ questions: results, loading: false });
    };

    reset = () => {
        this.setState(
            {
                questions: [],
                current: 0,
                results: {
                    score: 0,
                    correctAnswers: 0
                },
                completed: false
            },
            () => {
                this.fetchQuestions();
            }
        );
    };

    submitAnswer = (index, answer) => {
        const question = this.state.questions[index];
        const isCorrect = question.correct_answer === answer;
        const results = { ...this.state.results };

        results.score = isCorrect ? results.score + 5 : results.score;
        results.correctAnswers = isCorrect
            ? results.correctAnswers + 1
            : results.correctAnswers;

        this.setState({
            current: index + 1,
            results,
            completed: index === 9 ? true : false
        });
    };

    componentDidMount() {
        this.fetchQuestions();
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={{ flex: 1, backgroundColor: Colors.white }}>
                    {!!this.state.loading && (
                        <View style={{ margin: 10,marginTop:20 }}>
                            <ActivityIndicator size="small" color={Colors.orange} />
                        </View>
                    )}
                    {!!this.state.questions.length > 0 &&
                        this.state.completed === false && (
                            <Question
                                onSelect={answer => {
                                    this.submitAnswer(this.state.current, answer);
                                }}
                                question={this.state.questions[this.state.current]}
                                correctPosition={Math.floor(Math.random() * 3)}
                                current={this.state.current}
                            />
                        )}

                    {this.state.completed === true && (
                        <View style={{ alignItems: "center",marginTop:20 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>Quiz Completed</Text>
                            <View style={{ backgroundColor: '#DDF8C2', width: '95%', margin: '5%' }}>
                                <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold', color: Colors.black }}>{'Marks : ' + this.state.results.score + '/50'}</Text>
                                <View style={{ backgroundColor: Colors.white, margin: 3, paddingStart: 5, paddingEnd: 5 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ flex: 1 }}> Correct Answers</Text><Text>:{" "}{this.state.results.correctAnswers}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ flex: 1 }}> Incorrect Answers</Text><Text>:{" "}{10 - this.state.results.correctAnswers}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ flex: 1 }}> Obtained Score</Text><Text>:{" "}{this.state.results.score}</Text>
                                    </View>
                                    
                                </View>

                            </View>







                            <TouchableOpacity onPress={this.reset}>
                                <View style={{ borderRadius: 20, backgroundColor: Colors.orange, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: Colors.white, textAlign: 'center', fontWeight: 'bold' }}>Restart Quiz</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </SafeAreaView>
        );
    }


}


export default QuestionScreen;