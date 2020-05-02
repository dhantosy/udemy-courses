import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';

class Contacts extends Component {

  render() {
    return (
      <SafeAreaView>
        <Text>Contact Screen</Text>
        <FlatList
          style={{ backgroundColor: colors.background }}
          data={contacts}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.email}</Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.email}
      />
      </SafeAreaView>
    )
  }
}

export default Contacts;
