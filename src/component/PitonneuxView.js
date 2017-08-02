import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafariView from 'react-native-safari-view';
import { Button } from 'react-native-elements';


class PitonneuxView extends Component{ 
    render(){
        return(
            <Image source={require('LesPitonneuxCommunity/img/Background_LesPitonneux.jpg')} style={styles.container}> 
                <View>
                    <Image style={styles.loggreen}
                    source={require('LesPitonneuxCommunity/img/Logo_vertPitonneux.png')}/>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonContainerTop}>
                        <Image style={styles.button}
                        source={require('LesPitonneuxCommunity/img/buttonMe.png')}/>
                    </View>
                    <View style={styles.buttonContainerBottom}>
                        <Image style={styles.button}
                        source={require('LesPitonneuxCommunity/img/buttonCommunity.png')}/>
                        <Image style={styles.button}
                        source={require('LesPitonneuxCommunity/img/buttonActivities.png')}/>
                    </View>
                </View>
            </Image> 
        );
    }

}
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        width: null,
        height: null,
    },

    backgroundImage:{
        flex:1,
        resizeMode:'cover', //or 'stretch'
    },

    loggreen:{
        //flex:1,
        resizeMode:'center', // 'center' or 'contain'
        alignSelf:'center',
        height:200,
        width:200,
        //borderWidth:2,
    },

    buttonContainer:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },

    buttonContainerTop:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    buttonContainerBottom:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
    },

    button:{
        //flex:1,
        resizeMode:'center', // 'center' or 'contain'
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: 'white',
    },
});
  


module.exports = PitonneuxView;
