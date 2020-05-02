import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

class Contacts extends Component {

  handleRowPress = (item) => {
    return null;
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Contact Screen</Text>
        <FlatList
          style={{ backgroundColor: colors.background }}
          data={contacts}
          renderItem={({ item }) => {
            return (
              <ListItem 
                contact={item}
                onPress={() => this.handleRowPress(item)}
              />
            )
          }}
          keyExtractor={(item) => item.email}
      />
      </SafeAreaView>
    )
  }
}

export default Contacts;
