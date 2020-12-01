import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// IMPORT DE OTRAS PANTALLAS
import {MainScreen} from "../Screens/MainScreen";
import {CharacterScreen} from "../Screens/CharacterScreen";
import {HouseScreen} from "../Screens/HouseScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(CharacterScreen, HouseScreen, MainScreen);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}/>}
                onLogout={() => this.setLogout()}
            >
                <Drawer.Screen name="Inicio" component={MainScreen} /> 
                <Drawer.Screen name="Personajes" component={CharacterScreen} />
                <Drawer.Screen name="Casas" component={HouseScreen} />
            </Drawer.Navigator>
        );
    }
    
}