import React, {Component} from 'react';
import {Image,View,Text} from 'react-native';
import SvgUri from 'react-native-svg-uri';


export default class ImageBtn extends React.Component{
    render(){
        var img = require('../../assets/images/pildora.svg')
        return(
            <SvgUri
                width="65"
                height="65"
                source={img}
            />
            // <View>
            //     <Text>Hola</Text>
            // </View>
        )
    }    
}