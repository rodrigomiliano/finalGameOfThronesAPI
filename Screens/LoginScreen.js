
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component{

    
    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){

        try {
            const result = await Google.logInAsync({
                androidClientId: "144256004815-beabtt3aribtj6fqkdke0fvbbij9lq8k.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
                console.log(result);
                try {
                    //await SessionManager.storeSession(result); //AGREGADO
                    this.props.onLogin();
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../img/iafgot4.jpg')} style={styles.image}></ImageBackground>
                <Button
                    onPress={() => this._signInWithGoogle()}
                    title="Iniciar sesión con Google"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        /*flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        flexDirection: 'column',
        backgroundColor: 'transparent',
        opacity: 20,
        width: 400,
        height: undefined,*/
        height: 350,
        width: 400,
        marginBottom: 10,
    },
});

