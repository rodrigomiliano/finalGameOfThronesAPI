import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerDefaultNavigator} from './Navigators/DrawerDefaultNavigator';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';

import LoginScreen from "./Screens/LoginScreen";
import MainScreen from "./Screens/MainScreen";
import {CharacterScreen} from "./Screens/CharacterScreen";
import {HouseScreen} from "./Screens/HouseScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContentScreen} from "./Screens/DrawerContentScreen";

const Drawer = createDrawerNavigator();

export default class App extends Component {

  constructor(props){ //CREO CONSTRUCTOR Y FUNCIONES DE LOG
    super(props);
    this.state = {isLoggedIn:false}
  }
  
  setLogin(){
    this.setState({isLoggedIn:true});
  }

  setLogout(){
    this.setState({isLoggedIn:false});
  }

  render(){
    //return (
    //  <NavigationContainer>
    //    {/*<DrawerDefaultNavigator />*/}
    //    <DrawerCustomNavigator />
    //  </NavigationContainer>
    //);

    /*let screen;
    if(this.state.isLoggedIn){
       screen = <MainScreen onLogout={() => this.setLogout()}/>
    } else {
        screen = <LoginScreen onLogin={() => this.setLogin()}/>
    }

    return screen;*/

    let screen;
    if(!this.state.isLoggedIn)
    {       
     screen = <LoginScreen onLogin={()=> this.setLogin()}/>    
    }else{
      screen =
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Home"
          headerMode={'none'}
          drawerContent={props => <DrawerContentScreen {...props} onLogout={() => this.setLogout()}/>}
          >
          <Drawer.Screen name="Personajes" component={CharacterScreen} />
          <Drawer.Screen name="Casas" component={HouseScreen} />
          
        </Drawer.Navigator>
      </NavigationContainer>          
        }
        return screen;

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
