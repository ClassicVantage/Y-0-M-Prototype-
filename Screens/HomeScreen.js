import React,{Component} from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    Modal,
    KeyBoardAvoidingView,
    StyleSheet,
    Alert,
    ScrollView
} from "react-native";

import db from "../config"
import firebase from "firebase"

export default class welcomescreen extends Component{

    render(){
        return(
        <View style={styles.container}>

            
            <Image
              source={require("../assets/YOM LOGO.png")}
              style={styles.LogoYas}
            />
            
            <TouchableOpacity >
                <Text> Make a polll</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>View your polls</Text>
            </TouchableOpacity>
            <TouchableOpacity>

                <Text> Vote in a poll</Text>
            </TouchableOpacity>
        </View>
        )
    }

    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#006a71"
    },
    LogoYas:{
    height:50,
    wisth:100
    }
})