import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Esto es Profile</Text>
      </SafeAreaView>
    );
  }
}
