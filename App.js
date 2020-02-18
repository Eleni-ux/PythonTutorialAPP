import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Questions from './Components/Questions';
import InterviewQuestions from './Components/InterviewQuestions';
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator,
} from 'react-navigation';
import Home from './Components/Home';
import Browser from './Components/Browser';

import {Container} from 'native-base';

const {width} = Dimensions.get('window');

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Container>
        <HomeStack />
      </Container>
    );
  }
}

const customDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        height: 150,
        backgroundColor: '#849BAF',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.circle}>
        <Image
          source={require('./python-icon-27.png')}
          style={{height: 120, width: 120, boarderRadius: 60}}
        />
      </View>
    </View>
    <ScrollView>
      <DrawerItems style={{fontSize: 25}} {...props} />
    </ScrollView>
  </SafeAreaView>
);
const AppDrawerNavigator = createDrawerNavigator(
  {
    Tutorial: Home,
    Questions: Questions,
    'Interview Questions': InterviewQuestions,
  },
  {
    contentComponent: customDrawerComponent,

    drawerWidth: width * 0.8,
    contentOptions: {
      activeTintColor: 'orange',
    },
  },
);

const HomeStack = createStackNavigator({
  AppDrawerNavigator: AppDrawerNavigator,
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerTintColor: 'blue',
    }),
  },
  Browser: {
    screen: Browser,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title,
      headerTintColor: '#002e57',
      headerStyle: {
        backgroundColor: '#98AFC7',
      },
    }),
  },
});

const scoreCircleSize = 150;
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: 'green',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize / 2,
    backgroundColor: 'white',
  },
});

export default App;
