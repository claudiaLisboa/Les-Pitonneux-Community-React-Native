import React, { Component } from 'react';
import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  AppRegistry, 
  TouchableHighlight
} from 'react-native';
import NavBar from 'react-native-navbar';

// class Profile2 extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//            <View style ={styles.container}>
              
//                <Text style={styles.heading}>Edit your Profile</Text>
//                <Text style={styles.heading}>Name</Text>
//                <TextInput 
//                    onChangeText={(text)=> this.setState({Name:text})}
//                    style={styles.input}></TextInput>
//                <Text style={styles.heading}>What I do</Text>
//                <TextInput 
//                    onChangeText={(text)=> this.setState({WhatIdo:text})}
//                    style={styles.input}> </TextInput>
//                <Text style={styles.heading}>I am interested in:</Text>
//                <TextInput 
//                    onChangeText={(text)=> this.setState({interested:text})}
//                    style={styles.input}> </TextInput>
//                <Text style={styles.heading}>I can help with:</Text>
//                <TextInput 
//                      onChangeText={(text)=> this.setState({help:text})}
//                     style={styles.input}> </TextInput>
//                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
//                   <Text style={styles.buttonText}>Cancel</Text>
//                </TouchableHighlight>
//                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
//                    <Text style={styles.buttonText}>Save Changes</Text>
//                 </TouchableHighlight>
//            </View>
//         );
//     }

// }
// /*<Image style={styles.loggreen} source={require('./../img/Logo_vertPitonneux.png')}/>*/
// //export default Inputs

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#F5FCFF',
//       // remove width and height to override fixed static size
//       width: null,
//       height: null,
//     },
//     content: {
//       flex: 1,
//       backgroundColor: 'rgba(52, 52, 52, 1.0)',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: 20,
//     },
//     avatarImage: {
//       borderRadius: 50,
//       height: 100,
//       width: 100,
//     },
//     header: {
//       fontSize: 20,
//       textAlign: 'center',
//       margin: 10,
//     },
//     text: {
//       textAlign: 'center',
//       color: '#333',
//       marginBottom: 5,
//     },
//     buttons: {
//       justifyContent: 'space-between',
//       flexDirection: 'row',
//       margin: 20,
//       marginBottom: 30,


//     },
//     loggreen:{
//       //flex:1,
//       resizeMode:'center', // 'center' or 'contain'
//       alignSelf:'center',
//       // height:250,
//       // width:250,
//       height:200,
//       width:200,
//       //borderWidth:2,
//     },
//   });

//   module.exports = Profile2;
  