import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

const ContactNavigator = createStackNavigator({
  Contacts: {
    screen: Contacts
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first} ${navigation.state.params.name.last}` 
    })
  }
});

const NewContactNavigator = createStackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: () => ({
      headerTitle: 'New Contact'
    })
  }
});

const MeNavigator = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: () => ({
      headerTitle: 'ME'
    })
  },
});

// export default createAppContainer(MyNavigator);

const Tabs = createBottomTabNavigator({
  Contact: {
    screen: ContactNavigator,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-list' size={35} color={tintColor} />
    }
  },
  NewContact: {
    screen: NewContactNavigator,
    navigationOptions: {
      tabBarLabel: 'New Contact',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-add' size={35} color={tintColor} />
    }
  },
  Me: {
    screen: MeNavigator,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name='ios-contact' size={35} color={tintColor} />
    }
  }
});

export default createAppContainer(Tabs);
