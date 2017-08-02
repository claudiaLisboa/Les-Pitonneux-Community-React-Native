'use strict';

import React, { Component } from 'react';
import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry, 
  TouchableHighlight
} from 'react-native';


var t = require('tcomb-form-native');
var Form = t.form.Form;

// here we are: define your domain model
  // const Person = t.struct({
  //    t.String, ()=> 'Name',              // a required string
  //   t.String,  ()=> 'What I do',        // a required string
  //   interested: t.String,          // a required string
  //   help: t.String,          // a required string
  //   rememberMe: t.Boolean        // a boolean
  // }); 

/* var options={
  fields: {
      whatIdo:{
        label:<i>What I Do</i>
      }
    }
};  */

//var options = {}; // optional rendering options (see documentation)

// class Profile extends Component { 
// }
//       constructor(props){
//             super(props);
//   onPress () {
//     // call getValue() to get the values of the form
//     var value = this.refs.form.getValue();
//     if (value) { // if validation fails, value will be null
//       console.log(value); // value here is an instance of Person
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* display */}
//         <Form
//           ref="form"
//           type={Person}
//           options={options}
//         />
//         <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// };



var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = Profile;
