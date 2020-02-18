import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {Card, Text} from 'native-base';

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
          '1. RegEx can be used to check if a string contains the specified search pattern.',
      },
      question2: {
        correctoption: 'option4',
        options: {
          option1: 're.search("^TheUSA", stringname)',
          option2: 're.search("he.USA", stringname)',
          option3: 're.search("^The.USA", stringname)',
          option4: 're.search("^The.*USA$", stringname)',
        },
        question:
          '2. Which one of the following searches a string to check whether it starts with “The” and ends with “USA”?',
      },
      question3: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question: '3. A package contains all the files you need for a module.',
      },
      question4: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question: '4. The try block lets you test a block of code for errors.',
      },
      question5: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question: '5. The except block lets you handle the error.',
      },
      question6: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question:
          '6. The finally block lets you execute code, regardless of the result of the try- and except blocks.',
      },
      question7: {
        correctoption: 'option4',
        options: {
          option1: 'list(dict.fromkeys(listname))',
          option2: 'list(fromkeys(listname))',
          option3: 'list(dict(listname))',
          option4: 'None of the above',
        },
        question: '7. How do you remove any duplicates from a List?',
      },
      question8: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question:
          '8. Python can be used for different cross-platform applications like web-apps, scientific models, big data applications and many more.',
      },
      question9: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question:
          '9. Memory management in python is managed by Python private heap space.',
      },
      question10: {
        correctoption: 'option1',
        options: {
          option1: 'True',
          option2: 'False',
        },
        question:
          '10. Java has a static data type while Python has a dynamic typed-data type.',
      },
    },
  },
};
class AdvancedQuiz extends Component {
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
export default AdvancedQuiz;
