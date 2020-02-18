import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, StatusBar, Alert} from 'react-native';
import {Header, Title, Left, Right, Body, Icon, Text} from 'native-base';
import Multiple from '../Components/Multiple';
import IntermidateMultiple from '../Components/IntermidateMultiple';
import AdvancedMultiple from '../Components/AdvancedMultiple';

class Questions extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name="quetion" style={{fontSize: 24, color: tintColor}} />
    ),
  };
  state = {
    modalVisible: false,
    easy: false,
    intermidate: false,
    advanced: false,
  };

  setModalVisible(visible, easyq, intermidateq, advancedq) {
    this.setState({
      modalVisible: visible,
      easy: easyq,
      intermidate: intermidateq,
      advanced: advancedq,
    });
  }

  render() {
    return (
      <View style={{backgroundColor: '#B1B1B10', flex: 1}}>
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
              Questions
            </Title>
          </Body>
          <Right />
        </Header>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Click on Questions to go back!');
          }}>
          {this.state.easy && <Multiple />}
          {this.state.intermidate && <IntermidateMultiple />}
          {this.state.advanced && <AdvancedMultiple />}

          <TouchableHighlight
            style={{
              backgroundColor: '#42a5ff',
              borderRadius: 20,
              margin: 30,
              padding: 15,
            }}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
              Questions
            </Text>
          </TouchableHighlight>
        </Modal>

        <TouchableHighlight
          style={{
            backgroundColor: '#849BAF',
            borderRadius: 20,
            margin: 30,
            padding: 15,
          }}
          onPress={() => {
            this.setModalVisible(true, true, false, false);
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Easy
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: '#849BAF',
            borderRadius: 20,
            marginBottom: 30,
            marginLeft: 30,
            marginRight: 30,
            padding: 15,
          }}
          onPress={() => {
            this.setModalVisible(true, false, true, false);
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Intermediate
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: '#849BAF',
            borderRadius: 20,
            marginLeft: 30,
            marginRight: 30,
            padding: 15,
          }}
          onPress={() => {
            this.setModalVisible(true, false, false, true);
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Advanced
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default Questions;
