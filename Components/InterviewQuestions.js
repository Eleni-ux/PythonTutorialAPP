import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {
  Right,
  Title,
  Container,
  Body,
  Header,
  Icon,
  Left,
  Content,
  Accordion,
} from 'native-base';

const dataArray = [
  {
    title: 'What type of language is python?',
    content:
      'Answer: Python is capable of scripting, but in general sense, it is considered as a general-purpose programming language. ',
  },
  {
    title: 'How is Python an interpreted language?',
    content: 'Answer:  Python program runs directly from the source code .',
  },
  {
    title: 'What is the difference between Python \nArrays and lists? ',
    content:
      'Answer: Arrays and lists, in Python, have the same way of storing data. But, arrays can hold only a single data type elements whereas lists can hold any data type elements.',
  },
  {
    title: 'What is __init__? ',
    content:
      'Answer: __init__ is a method or constructor in Python. This method is automatically called to allocate memory when a new object/ instance of a class is created. All classes have the __init__ method.',
  },
  {
    title: 'What is a lambda function? ',
    content:
      'Answer: An anonymous function is known as a lambda function. This function can have any number of parameters but, can have just one statement.',
  },
  {
    title: 'What is self in Python? ',
    content:
      'Answer: In Python class. self represents the instance of the class.',
  },
  {
    title: 'What is PEP 8?',
    content:
      'Answer: PEP 8 is a coding convention, a set of recommendation, about how to write your Python code more readable.',
  },
  {
    title:
      'What are the tools that help to find bugs or \nperform static analysis?',
    content:
      'Answer:  PPyChecker is a static analysis tool that detects the bugs in Python source code and warns about the style and complexity of the bug.',
  },
  {
    title: 'What are Python decorators? ',
    content:
      'Answer: A Python decorator is a specific change that we make in Python syntax to alter functions easily.',
  },
  {
    title: 'How are arguments passed by value or \nby reference?',
    content:
      'Answer: Everything in Python is an object and all variables hold references to the objects. The references values are according to the functions; as a result you cannot change the value of the references.',
  },
  {
    title: 'What is Dict and List comprehensions are? ',
    content:
      'Answer: They are syntax constructions to ease the creation of a Dictionary or List based on existing iterable.',
  },
  {
    title: 'Why lambda forms in python does not \nhave statements?',
    content:
      'Answer: A lambda form in python does not have statements as it is used to make new function object and then return them at runtime.',
  },
];
export default class InterviewQuestions extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="book" style={{fontSize: 24, color: tintColor}} />
    ),
  };

  render() {
    return (
      <Container>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
        <Header
          androidStatusBarColor="#34495e"
          style={{backgroundColor: '#98AFC7'}}>
          <Left>
            <Icon
              name="menu"
              style={{color: 'white'}}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>

          <Title
            style={{
              color: 'white',
              paddingTop: 20,
              fontSize: 25,
              paddingLeft: 30,
            }}>
            Interview Questions
          </Title>

          <Right />
        </Header>
        <Content style={{backgroundColor: '#98AFC7'}} padder>
          <Accordion
            style={{backgroundColor: '#98AFC7', fontSize: 25}}
            dataArray={dataArray}
            expanded={0}
          />
        </Content>
      </Container>
    );
  }
}
