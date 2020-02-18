import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {Card, Button, Text} from 'native-base';

const {width} = Dimensions.get('window');

let arrnew = [];
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: ' False',
        },
        question:
          '1. Python is a high-level, interpreted, interactive and object-oriented scripting language.',
      },
      question2: {
        correctoption: 'option3',
        options: {
          option1: 'J',
          option2: 'O',
          option3: 'Jo',
          option4: 'None of the above',
        },
        question: "2. What is the output of print(str[0:2]) if str = 'John'?",
      },
      question3: {
        correctoption: 'option4',
        options: {
          option1: 'Hello',
          option2: 'Hello World',
          option3: 'llo World',
          option4: 'lo World',
        },
        question:
          "3. What is the output of print(str[3:]) if str = 'Hello World!'?",
      },
      question4: {
        correctoption: 'option4',
        options: {
          option1: '[2, 3, 4]',
          option2: '[3, 4, 5]',
          option3: '[1, 2, 3]',
          option4: '[3, 4]',
        },
        question:
          '4. What is the output of print(list[2:4]) if list = [ 1, 2 , 3, 4, 5]?',
      },
      question5: {
        correctoption: 'option2',
        options: {
          option1: 'str(string)',
          option2: 'tuple(string)',
          option3: 'int(string)',
          option4: 'None of the above',
        },
        question: '5. How do you convert a string to a tuple in python?',
      },
      question6: {
        correctoption: 'option4',
        options: {
          option1: 'List',
          option2: 'Sets',
          option3: 'Dictionaries',
          option4: 'All of the above are mutable built-in types',
        },
        question:
          '6. Which one of the following is mutable built-in type of Python?',
      },
      question7: {
        correctoption: 'option4',
        options: {
          option1: 'String',
          option2: 'Tuple',
          option3: 'Numbers',
          option4: 'All of the above are immutable built-in types',
        },
        question:
          '7. Which one of the following is immutable built-in type of Python?',
      },
      question8: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question:
          '8. Lambda is a single expression anonymous function often used as inline function.',
      },
      question9: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question:
          '9. A variable created outside of a function is global and can be used by anyone.',
      },
      question10: {
        correctoption: 'option1',
        options: {
          option1: 'global',
          option2: 'local',
          option3: 'this',
          option4: 'self',
        },
        question:
          '10. Use the ______ keyword if you want to make a change to a global variable inside a function.',
      },
    },
  },
};
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;

    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map(function(k) {
      return jdata[k];
    });
    this.state = {
      change: true,
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
    };
  }
  _answer(ans) {
    if (ans == this.state.correctoption && this.state.change) {
      this.score += 1;
    }
    if (this.qno < arrnew.length - 1) {
      this.qno++;
      this.setState({
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
        change: true,
      });
    } else if (this.qno == arrnew.length - 1) {
      this.props.quizFinish((this.score * 100) / 10);
    }
  }

  render() {
    let _this = this;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(function(k) {
      return (
        <View key={k} style={{margin: 10}}>
          <TouchableHighlight
            style={{backgroundColor: '#b8ddff', borderRadius: 20, padding: 15}}
            onPress={() => _this._answer(k)}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'lucida grande',
              }}>
              {' '}
              {currentOptions[k]}
            </Text>
          </TouchableHighlight>
        </View>
      );
    });

    return (
      <ScrollView style={{backgroundColor: '#F5FCFF', paddingTop: 20}}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Card style={{marginTop: 40}}>
              <View style={styles.oval}>
                <Text style={styles.welcome}>{this.state.question}</Text>
              </View>
            </Card>
            <Card style={{marginTop: 20}}>{options}</Card>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  oval: {
    width: (width * 90) / 100,
    borderRadius: 20,
    backgroundColor: '#b8ddff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  nextButton: {
    backgroundColor: '#b8ddff',
    padding: 50,
    marginLeft: 30,
    marginTop: 10,
    borderRadius: 20,
  },
});
export default Quiz;
