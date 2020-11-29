
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {CharacterScreen} from "../Screens/CharacterScreen";
import {HouseScreen} from "../Screens/HouseScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(CharacterScreen, HouseScreen);

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
                <Drawer.Screen name="Personajes" component={CharacterScreen} />
                <Drawer.Screen name="Casas" component={HouseScreen} />
            </Drawer.Navigator>
        );
    }
    
}

