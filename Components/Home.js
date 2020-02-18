import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {
  Right,
  Title,
  CardItem,
  Body,
  Icon,
  Container,
  Card,
  Header,
  Left,
  Text,
} from 'native-base';

class BeginnerT extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="book" style={{fontSize: 24, color: tintColor}} />
    ),
  };
  state = {
    screenHeight: 0,
    links: [
      {
        title: 'Python Variables',
        link: 'https://www.w3schools.com/python/python_variables.asp',
      },
      {
        title: 'Python Data Types',
        link: 'https://www.w3schools.com/python/python_datatypes.asp',
      },
      {
        title: 'Python Numbers',
        link: 'https://www.w3schools.com/python/python_numbers.asp',
      },
      {
        title: 'Python Casting',
        link: 'https://www.w3schools.com/python/python_casting.asp',
      },
      {
        title: 'Python Strings',
        link: 'https://www.w3schools.com/python/python_strings.asp',
      },
      {
        title: 'Python Boolean',
        link: 'https://www.w3schools.com/python/python_booleans.asp',
      },
      {
        title: 'Python Oprators',
        link: 'https://www.w3schools.com/python/python_operators.asp',
      },
      {
        title: 'Python Lists',
        link: 'https://www.w3schools.com/python/python_lists.asp',
      },
      {
        title: 'Python Tuples',
        link: 'https://www.w3schools.com/python/python_tuples.asp',
      },
      {
        title: 'Python Sets',
        link: 'https://www.w3schools.com/python/python_sets.asp',
      },
      {
        title: 'Python Dictionaries',
        link: 'https://www.w3schools.com/python/python_dictionaries.asp',
      },
      {
        title: 'Python If...Else',
        link: 'https://www.w3schools.com/python/python_conditions.asp',
      },
      {
        title: 'Python While Loops',
        link: 'https://www.w3schools.com/python/python_while_loops.asp',
      },
      {
        title: 'Python For Loops',
        link: 'https://www.w3schools.com/python/python_for_loops.asp',
      },
      {
        title: 'Python Functions',
        link: 'https://www.w3schools.com/python/python_functions.asp',
      },
      {
        title: 'Python Lambda',
        link: 'https://www.w3schools.com/python/python_lambda.asp',
      },
      {
        title: 'Python Arrays',
        link: 'https://www.w3schools.com/python/python_arrays.asp',
      },
      {
        title: 'Python Classes/Object',
        link: 'https://www.w3schools.com/python/python_classes.asp',
      },
    ],
  };
  handleButtonPress(item) {
    let {title, link} = item;

    this.props.navigation.navigate('Browser', {title, link});
  }

  render() {
    return (
      <Container style={{backgroundColor: '#B1B1B10'}}>
        <Header style={{backgroundColor: '#98AFC7'}}>
          <Left>
            <Icon
              name="menu"
              style={{color: 'white'}}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body>
            <Title style={{color: 'white', fontSize: 25, paddingLeft: 50}}>
              Tutorial
            </Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          {this.state.links.map((item, index) => (
            <Card>
              <CardItem>
                <Icon name="book" />
                <TouchableOpacity
                  key={index}
                  onPress={() => this.handleButtonPress(item)}
                  style={styles.button}>
                  <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
              </CardItem>
            </Card>
          ))}
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002e57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonList: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 8,
    backgroundColor: '#849BAF',
    borderRadius: 5,
    padding: 8,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
  },
});
export default BeginnerT;
