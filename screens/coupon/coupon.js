import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { red } from 'ansi-colors';


export default class CouponScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.box}>
            <View style={styles.special_box}>
                {/* <View style={styles.}>

                </View> */}
                <Text>Hola</Text>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    display: 'flex',
  },
  special_box: {
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 40,
      marginRight: 40,
      height: 180
      // borderBottom: '1px solid dashed'
      }
});
