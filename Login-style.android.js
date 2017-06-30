'use strict';


import { StyleSheet } from 'react-native'

var Login = require('./Login');


export default StyleSheet.create({
  container: {
   flex:1,
        flexDirection: 'column',
        backgroundColor:'#f5fcff',
        justifyContent: 'center',
        alignItems:'center',
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
        backgroundColor:'rgba(0,0,0,0)',
        justifyContent: 'flex-end',
        alignItems:'center',
        width: null,
        height: null,
    },

    buttonGmail:{
        //flex:1,
        resizeMode:'center', // 'center' or 'contain'
        // alignSelf:'center',
        // flexDirection:'column',
        // justifyContent: 'flex-end',
        // height:250,
        // width:250,
        //borderWidth:2,
    },
    buttonSlack:{
        //flex:1,
        resizeMode:'center', // 'center' or 'contain'
        // alignSelf:'center',
        // flexDirection:'column', 
        // justifyContent: 'flex-end',
        // height:250,
        // width:250,
        //borderWidth:2,
    }
})
