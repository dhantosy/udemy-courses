import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

const MyNavigator = createStackNavigator({
  Contact: {
    screen: Contacts
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first} ${navigation.state.params.name.last}` 
    })
  }
});

export default createAppContainer(MyNavigator);
