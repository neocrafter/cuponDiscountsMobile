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

//Importing Components
import Coupon from '../../components/coupons/coupon';


export default class CouponScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props){
    super(props);
    // this.state = [
    //   {
    //     title: "10% Descuento",
    //     subtitle: "LORATADINA 10 MG X 8",
    //     description: "La loratadina se usa para aliviar en forma temporal los síntomas de la fiebre del heno (alergia al polen, polvo u otras sustancias en el aire) y otras alergias. Estos síntomas incluyen estornudos, secreción nasal, y picazón en los ojos, nariz y garganta. La loratadina también se usa para tratar la picazón y el enrojecimiento causados por la urticaria. Sin embargo, este medicamento no previene las urticarias u otras reacciones alérgicas de la piel. La loratadina pertenece a una clase de medicamentos llamados antihistamínicos. Funciona al bloquear la acción de la histamina, una sustancia en el cuerpo que causa síntomas de alergias."
    //   }
    // ]
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={{margin: 20,height: "100%",backgroundColor: "white"}}>
      <ScrollView>
          <Coupon></Coupon>
          <Coupon></Coupon>
          <Coupon></Coupon>
          <Coupon></Coupon>
          <Coupon></Coupon>
      </ScrollView>

      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  box: {
    paddingTop: 15,
    backgroundColor: 'black',
    display: 'flex',
  },
  
});
