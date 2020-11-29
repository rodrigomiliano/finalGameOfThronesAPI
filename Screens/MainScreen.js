
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {DrawerCustomNavigator} from '../Navigators/DrawerCustomNavigator';

export default class MainScreen extends Component{

    handlerLogout(){
        this.props.onLogout();
    }

    render(){
        return (
            <NavigationContainer>
              <DrawerCustomNavigator />
            </NavigationContainer>
          );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});