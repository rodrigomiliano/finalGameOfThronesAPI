import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerDefaultNavigator} from './Navigators/DrawerDefaultNavigator';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';
import {HomeScreen} from './Screens/HomeScreen'
import {HouseScreen} from './Screens/HouseScreen'
import {LoginScreen} from './Screens/LoginScreen'

export default class App extends Component {
  
   constructor(props){
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
  let screen;
  if(!this.state.isLoggedIn){
    screen = <LoginScreen onLogin={()=> this.setLogin()}/>
  }else{
    screen =
    <NavigationContainer>
     
      <Drawer.Navigator 
        initialRouteName="HomeScreen"
        drawerContent={props => <DrawerContentScreen {...props} onLogout={() =>this.setLogout()}/> }
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="HouseScreen" component={HouseScreen} />
      </Drawer.Navigator>
    </NavigationContainer>}
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
