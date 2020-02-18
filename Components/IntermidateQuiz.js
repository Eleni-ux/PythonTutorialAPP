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
          option1: 'array.append(element)',
          option2: 'array.add(element)',
          option3: 'array.put(element)',
          option4: 'array.pop(element)',
        },
        question: '1. How do you add an element to an array?',
      },
      question2: {
        correctoption: 'option2',
        options: {
          option1: 'array.pop(1)',
          option2: 'array.pop(2)',
          option3: 'array.remove(1)',
          option4: 'array.pop(4)',
        },
        question:
          '2. How do you delete the third element from an array if array = [1,2,3,4]?',
      },
      question3: {
        correctoption: 'option4',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question:
          "3. The list's remove() method only removes the first occurrence of the specified value.",
      },
      question4: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question:
          '4. The __init__() function is called automatically every time the class is being used to create a new object.',
      },
      question5: {
        correctoption: 'option2',
        options: {
          option1: '__init__',
          option2: 'self',
          option3: 'this',
          option4: 'None of the above',
        },
        question:
          '5. The______parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.',
      },
      question6: {
        correctoption: 'option1',
        options: {
          option1: 'pass',
          option2: 'self',
          option3: 'this',
          option4: 'None of the above',
        },
        question:
          '6. What do you have to put in to avoid getting an error if you have a class definition with no content?',
      },
      question7: {
        correctoption: 'option1',
        options: {
          option1: 'super()',
          option2: '___init__()',
          option3: 'super().__init__()',
          option4: 'None of the above',
        },
        question:
          '7. A________function that will make the child class inherit all the methods and properties from its parent.',
      },
      question8: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question:
          '8. A variable created inside a function belongs to the local scope of that function, and can only be used inside that function.',
      },
      question9: {
        correctoption: 'option4',
        options: {
          option1: 'Arithmetic',
          option2: 'Relational',
          option3: 'Assignment',
          option4: 'All of the above',
        },
        question: '9. What are types of Operator are used in Python?',
      },
      question10: {
        correctoption: 'option1',
        options: {
          option1: 'module_name.function_name.',
          option2: 'function_name.module_name',
          option3: 'function_name.',
          option4: 'None of the above',
        },
        question:
          '10. Which one of the following is the right syntax to use a function from a module? .',
      },
    },
  },
};
class IntermidateQuiz extends Component {
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
export default IntermidateQuiz;
