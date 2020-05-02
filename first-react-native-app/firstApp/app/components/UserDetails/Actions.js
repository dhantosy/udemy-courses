import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import { toPhoneNumber } from '../../helpers/string';
import Row from './Row';

const Actions = ({ email, cell, phone }) => {

  return (
    <View style={styles.actionContainer}>
      <Row 
        label='Email'
        body={email}
        actions={[
          {
            onPress: () => null, 
            iosIcon: 'ios-mail', 
            androidIcon: 'md-mail'
          }
        ]}
      />
      <Row
        label='Cell'
        body={toPhoneNumber(cell)}
        actions={[
          {
            onPress: () => null,
            iosIcon: 'ios-call',
            androidIcon: 'md-call'
          },
          {
            onPress: () => null,
            iosIcon: 'ios-text',
            androidIcon: 'md-text'
          }
        ]}
      />
      <Row
        label='Home'
        body={toPhoneNumber(phone)}
        actions={[
          {
            onPress: () => null,
            iosIcon: 'ios-call',
            androidIcon: 'md-call'
          }
        ]}
      />
    </View>
  )
}

export default Actions;
