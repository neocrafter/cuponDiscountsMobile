import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Button } from 'react-native-elements';

import ImageBtn from '../ImageBtn/ImageBtn';

export default class coupon extends React.Component {
  example = () => {
    console.log("Hola");
  };

  getYear() {
    return new Date().toDateString();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper_body}>
          <View style={styles.info_body}>
            <View style={styles.info_details}>
                <Text style={styles.title}>LORATADINA 10 MG X 8</Text>
                <Text style={styles.subtitle}>10% Descuento</Text>
                <Text style={styles.description}>La loratadina se usa para aliviar en forma temporal los síntomas de la fiebre del heno.</Text>
            </View>
            <View style={styles.info_price}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 2,flexDirection: "row",justifyContent: "center", alignItems: "center",paddingBottom: 10,paddingLeft: 15}}>
            <View style={{transform: [{rotate: "20deg"}],opacity: 0.3}}>
              <ImageBtn></ImageBtn>
            </View>
            <View style={{position: "absolute",display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "center"}}>
                <Text style={{fontSize: 20, color: "white"}}>$</Text>
                <Text style={{fontSize: 40, color: "white"}}>500</Text>
            </View>
            </View>
            </View>
          </View>
          <View style={{display: "flex", flexDirection: "row"}}>
            <View style={{backgroundColor: "white",height: 25,width: 25,borderRadius: 50,position: "absolute",top: -10,left: -25}}>
            </View>
          <View style={{ borderWidth: 1.7,borderColor: "white",borderStyle: "dashed",borderRadius: 1,flex: 3}}></View>
          <View style={{backgroundColor: "white",height: 25,width: 25,borderRadius: 50,position: "absolute",top: -10,right: -25}}>

            </View>
          </View>
          <View style={styles.buttons}>
            <Text style={{fontSize: 12, color: "white"}}>Periodo Valido: {this.getYear()}</Text>
            <TouchableOpacity style={{backgroundColor: "white",borderRadius: 25}} >
              <Text style={{paddingVertical: 5,paddingHorizontal: 10,fontSize: 22,color: "#73B6FE",fontWeight: "500"}}>Canjear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    borderStyle: "solid",
    borderColor: "#00000014",
    // borderSh
    borderWidth: 2,
    backgroundColor: "#73B6FE",
    height: 180,
    padding: 10,
    margin: 10,
    // margin: 30,
    borderRadius: 10,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: '#E5EAED',
    shadowOpacity: 0.5,
    // borderRa
  },
  upper_body: {
    flex: 1,
    padding: 1,
    display: "flex",
    flexDirection: "column"
  },
  info_body: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "black"
  },
  info_details: {
    flex: 2,
    marginBottom: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "baseline",
    // backgroundColor: "black"
  },
  info_price: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
},
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10
  },
  
  down_body: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
    // backgroundColor: "blue"
  },
  img: {
    height: 60,
    width: 60,
    backgroundColor: "#3B60C1",
    borderRadius: 20
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    color: "white"
  },
  subtitle: {
    flex: 1,
    fontSize: 14,
    // paddingVertical: 10,
    fontWeight: "400",
    color: "white"
  },
  description: {
    flex: 2,
    fontWeight: "300",
    fontSize: 12,
    color: "white",
    flexWrap: "wrap",
    // opacity: 0.8,
    textAlign: "justify"
  }
});
