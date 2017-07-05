import OAuthManager from 'react-native-oauth';
 
const config = {
    slack: {
        client_id: 'YOUR_CLIENT_ID',
        client_secret: 'YOUR_CLIENT_SECRET'
    },
    google: {
        callback_url: `com.googleusercontent.apps.385453512743-ffbfi7un3623a2307o6mgil0s2qq8qq2:/google`,
        client_id: '385453512743-ffbfi7un3623a2307o6mgil0s2qq8qq2.apps.googleusercontent.com',
    }
};
// Creating the manager.
const manager = new OAuthManager('com.googleusercontent.apps.385453512743-ffbfi7un3623a2307o6mgil0s2qq8qq2')
// Configuring the manager.
manager.configure(config);

// ... 
manager.authorize('google', {scopes: 'profile email'})
.then(resp => console.log('Your users ID'))
.catch(err => console.log('There was an error'));
