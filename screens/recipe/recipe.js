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


export default class RecipeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text>Hola</Text>
            </View>
        </SafeAreaView>
    );
  } 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 25,
      backgroundColor: '#fff',
    },
  });
