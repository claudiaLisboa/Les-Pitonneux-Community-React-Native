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

export default class Login extends Component {
  state = {
    user: undefined, // user has not logged in yet
  };

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // Decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    });
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  // Handle Login with Facebook button tap
  loginWithFacebook = () => {
    if (Platform.OS === 'ios')
    {
      this.openURL('http://localhost:3000/auth/facebook');
    }
    else
    {
      this.openURL('http://10.0.3.2:3000/auth/facebook');
    }
  };

  // Handle Login with Google button tap
  loginWithGoogle = () => {
    if (Platform.OS === 'ios')
    {
      this.openURL('http://localhost:3000/auth/google');
    }
    else
    {
      this.openURL('http://10.0.3.2:3000/auth/google');
    }
  };

  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };

  render() {
    const { user } = this.state;
    return (
      <Image source={require('./../img/Background_LesPitonneux.jpg')} style={styles.container}>
        {/*<View style={styles.container}>*/} 
        { /* user
          ? // Show user info if already logged in
            <View style={styles.content}>
              <Text style={styles.header}>
                Welcome {user.name}!
              </Text>
              <View style={styles.avatar}>
                <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
              </View>
            </View>
          : // Show Please log in message if not
            <View style={styles.content}>
              <Text style={styles.header}>
                Welcome Stranger!
              </Text>
              <View style={styles.avatar}>
                <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
              </View>
              <Text style={styles.text}>
                Please log in to continue {'\n'}
                to the awesomness
              </Text>
            </View>
            */
        }
        {/* Les Pitonneux logo */}
        <Image style={styles.loggreen} source={require('./../img/Logo_vertPitonneux.png')}/>
        {/* Login buttons */}
        {/*<View style={styles.container}>*/}
          <View style={styles.buttons}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={this.loginWithFacebook}
              {...iconStyles}
            >
              Login with Facebook
            </Icon.Button>
            <Icon.Button
              name="google"
              backgroundColor="#DD4B39"
              onPress={this.loginWithGoogle}
              {...iconStyles}
            >
              Login with Google
            </Icon.Button>
          </View>
        {/*</View>*/}
      </Image>
    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 1.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
  loggreen:{
    //flex:1,
    resizeMode:'center', // 'center' or 'contain'
    alignSelf:'center',
    // height:250,
    // width:250,
    height:200,
    width:200,
    //borderWidth:2,
  },
});
