/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button, Dimensions, ImageBackground } from 'react-native';
import {
  createAppContainer,

  SafeAreaView,
} from 'react-navigation';

import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import Card from './components/card'
import Icon from 'react-native-ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerItem from './components/DrawerItem'


const WIDTH = Dimensions.get('window').width;
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name='md-home' size={50} color="green" />
    ),
  };

  render() {
    return (
      <ImageBackground source={require('./assets/bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name='md-menu' size={WIDTH * 0.1} color="green" />
            </TouchableOpacity>
          </View>
          <Card name="Bus Booking" desc="Book bus tickets here at 20% discount from amazon voucher." />
          <Card name="Train Booking" desc="Book train tickets here at 20% discount from amazon voucher." />
          <Card name="Flight Booking" desc="Book flight tickets here at 20% discount from amazon voucher." />
        </View >
      </ImageBackground>
    );
  }
}

class MyNotificationsScreen extends React.Component {

  static navigationOptions = {
    title: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Icon name='md-notifications' size={50} color="green" />
    ),
  };
  render() {
    return (
      <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon name='md-menu' size={WIDTH * 0.1} color="green" />
          </TouchableOpacity>
          <View style={{ flexDirection: 'column', alignSelf: 'center', paddingStart: WIDTH * 0.25 }}>
            <Text style={{ fontSize: WIDTH * 0.06, fontWeight: 'bold' }}>Profile</Text>
          </View>

        </View>
        <View style={styles.imgView}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image style={styles.img} source={require('./assets/pro.jpg')} />
            <Text style={{ fontSize: WIDTH * 0.05, fontWeight: 'bold' }}>Rajesh Kumar Choudhary</Text>
            <Text style={{ fontSize: WIDTH * 0.04 }}>monu1041@gmail.com</Text>
            <Text style={{ fontSize: WIDTH * 0.04 }}>Bangalore,Karnataka</Text>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  imgView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  img: {
    height: WIDTH * 0.4,
    width: WIDTH * 0.4,
    borderRadius: 150,
  },
});

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  initialRouteName: 'Notifications',
  contentComponent: ({ navigation }) => {
    return (<DrawerItem navigation={navigation} />)
  }
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  },

  DrawerConfig,

);
const App = createAppContainer(MyDrawerNavigator);


export default App;
