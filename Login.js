'use strict';

var React = require('react');


import {
  Image,  
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component
  
} from 'react-native';

// I don't know how to use ES6
/*class Login extends Component{ 
    constructor(props){
        super(props);
        }
        render(){

        }
    }*/
var Login = React.createClass({ 
    render: function () {
        return(
           
            <Image source={require('./img/Background_LesPitonneux.jpg')} style={styles.container}> 
                
                <Image style={styles.loggreen}
                source={require('./img/Logo_vertPitonneux.png')}/>
                <TouchableHighlight
                   onPress={() => {this.props.onPress();}}>
                
                    <View style={styles.buttonContainer}>
                        <Image style={styles.buttonGmail}
                        source={require('./img/buttonLoginGmail.png')}/>
                        <Image style={styles.buttonSlack}
                        source={require('./img/buttonLoginSlack.png')}/>
                    </View>
                </TouchableHighlight>
            </Image>
            
/*            <View style={styles.container}> 
                <Image style={styles.backgroundImage}
                source={require('./img/Background_LesPitonneux.jpg')}/>
            
                <Image style={styles.loggreen}
                source={require('./img/Logo_vertPitonneux.png')}/>
              
                <Image style={styles.buttonGmail}
                source={require('./img/buttonLoginGmail.png')}/>
               <Image style={styles.buttonSlack}
                source={require('./img/buttonLoginSlack.png')}/>
            </View> 
*/        );
    }
});

var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:'#f5fcff',
        justifyContent: 'center',
        alignItems:'center',
        width: null,
        height: null,
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
    backgroundImage:{
         flex:1,
         resizeMode:'cover', //or 'stretch'
    },
    loggreen:{
        //flex:1,
        resizeMode:'center', // 'center' or 'contain'
        alignSelf:'center',
        // height:250,
        // width:250,
        borderWidth:2,
    },
    buttonGmail:{
        //flex:1,
        resizeMode:'center', // 'center' or 'contain'
        // alignSelf:'center',
        // flexDirection:'column',
        // justifyContent: 'flex-end',
        // height:250,
        // width:250,
        borderWidth:2,
    },
    buttonSlack:{
        //flex:1,
        resizeMode:'center', // 'center' or 'contain'
        // alignSelf:'center',
        // flexDirection:'column', 
        // justifyContent: 'flex-end',
        // height:250,
        // width:250,
        borderWidth:2,
    }
});
module.exports = Login;
//export default Login; -- I don't know how to use ES6 --