import { render, } from "react-dom";
import {Text,View,TouchableOpacity,} from "react-native"
import React from "react"

export default class SearchScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
              <Text>Search Screen</Text>
              <TouchableOpacity>
                <Text>Scan QR Code</Text>
              </TouchableOpacity>
            </View>
          );
    }
   
  }