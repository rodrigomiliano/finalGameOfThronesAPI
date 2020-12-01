import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {MainScreen} from "../Screens/MainScreen";
import {CharacterScreen} from "../Screens/CharacterScreen";
import {HouseScreen} from "../Screens/HouseScreen";

const Drawer = createDrawerNavigator();

export class DrawerDefaultNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Inicio" component={MainScreen} /> 
                <Drawer.Screen name="Personajes" component={CharacterScreen} />
                <Drawer.Screen name="Casas" component={HouseScreen} />
            </Drawer.Navigator>
        );
    }
    
}