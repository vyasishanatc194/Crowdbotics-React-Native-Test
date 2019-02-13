import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
import Colors from "../Resources/Colors";

export default class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: null
    };
  }

  renderOptions = question => {
    if (question.type === "boolean") {
      return [
        <RadioButton style={{ alignItems: 'center' }} value={"True"} key={1}>
          <Text style={styles.radioText}>True</Text>
        </RadioButton>,

        <RadioButton style={{ alignItems: 'center' }} value={"False"} key={2}>
          <Text style={styles.radioText}>False</Text>
        </RadioButton>
      ];
    } else {
      const result = [];

      question.incorrect_answers.forEach((item, index) => {
        let key = `${question.id}-${index}`;

        if (index === this.props.correctPosition) {
          let key2 = `${question.id}-100`;
          result.push(
            <RadioButton style={{ alignItems: 'center' }} value={question.correct_answer} key={key2}>
              <Text style={styles.radioText}>{question.correct_answer}</Text>
            </RadioButton>
          );
        }

        result.push(
          <RadioButton value={item} key={key} style={{ alignItems: 'center' }}>
            <Text style={styles.radioText}>{item}</Text>
          </RadioButton>
        );
      });

      return result;
    }
  };

  render() {
    return (
      <View style={{ flex: 1,marginTop:20 }}>
        <View style={{ marginStart: '5%', marginEnd: '5%' }}>
          <Text style={{ fontSize: 16, color: Colors.orange, textAlign: "right" }}>
            {this.props.current + 1} out of 10
        </Text>

          <Text style={{ fontSize: 18, fontWeight: "bold", color: Colors.orange, marginBottom: 10 }}>
            {this.props.question.question}
          </Text>
          <RadioGroup
            color={Colors.orange}

            onSelect={(index, answer) => this.setState({ answer })}
            selectedIndex={null}
          >
            {this.renderOptions(this.props.question)}
          </RadioGroup>
        </View>
        <TouchableOpacity style={{ marginStart: '5%', marginEnd: '5%', marginTop: 20 }} onPress={() => {
          this.props.onSelect(this.state.answer);
        }}>
          <View style={{ borderRadius: 20, backgroundColor: Colors.orange, padding: 10, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ color: Colors.white, fontWeight: "bold", textAlign: "center" }}>Submit Answser</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  radioText: {
    textAlign: 'center',
    fontSize: 20
  }
});
