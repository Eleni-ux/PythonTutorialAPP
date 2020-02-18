import React, {Component} from 'react';
import Quiz from '../Components/Quiz';
import {Alert} from 'react-native';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class Multiple extends Component {
  state = {
    quizFinish: false,
    score: 0,
  };

  _onPressBack() {
    if (this.state.quizFinish == true) {
      this.setState({
        quizFinish: false,
        score: 0,
      });
    } else {
      Alert.alert('Please finish the quiz!');
    }
  }
  _quizFinish(score) {
    this.setState({quizFinish: true, score: score});
  }
  _scoreMessage(score) {
    if (score <= 30) {
      if (score <= 0 || (score > 1 && score <= 20)) {
        return (
          <View style={styles.innerContainer}>
            <View style={{flexDirection: 'row'}}></View>
            <Text style={styles.score}>You need to work hard</Text>
            <Text style={styles.score}>You scored 0 %</Text>
          </View>
        );
      } else {
        return (
          <View style={styles.innerContainer}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="trophy" size={30} color="#FFDF00" />
            </View>
            <Text style={styles.score}>You need to work hard</Text>
            <Text style={styles.score}>You scored {score}%</Text>
          </View>
        );
      }
    } else if (score > 30 && score < 60) {
      return (
        <View style={styles.innerContainer}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="trophy" size={30} color="#FFDF00" />
            <Icon name="trophy" size={30} color="#FFDF00" />
          </View>
          <Text style={styles.score}>You are good</Text>
          <Text style={styles.score}>Congrats you scored {score}% </Text>
        </View>
      );
    } else if (score >= 60) {
      return (
        <View style={styles.innerContainer}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="trophy" size={30} color="#FFDF00" />
            <Icon name="trophy" size={30} color="#FFDF00" />
            <Icon name="trophy" size={30} color="#FFDF00" />
          </View>
          <Text style={styles.score}>You are the master</Text>
          <Text style={styles.score}>Congrats you scored {score}% </Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this._onPressBack()}>
            <Text style={styles.toolbarButton}>Start</Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle}></Text>
          <Text style={styles.toolbarButton}></Text>
        </View>

        {this.state.quizFinish ? (
          <View style={styles.container}>
            <View style={styles.circle}>
              {this._scoreMessage(this.state.score)}
            </View>
          </View>
        ) : (
          <Quiz quizFinish={score => this._quizFinish(score)} />
        )}
      </View>
    );
  }
}
const scoreCircleSize = 300;
const styles = StyleSheet.create({
  score: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize / 2,
    backgroundColor: '#00BFFF',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#42a5ff',
    paddingTop: 14,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  toolbarButton: {
    width: 70,
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
});

export default Multiple;
