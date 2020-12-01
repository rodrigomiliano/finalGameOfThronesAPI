 import { StatusBar } from 'expo-status-bar';
 import axios from 'axios'; // del proyecto 2
 import React, {Component} from 'react';
 import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
 
 export class HouseScreen extends Component {
 
     state = { // del poyecto 2
 
         response: [],
         estado: null,         
     
       };
 
       handlerText(texto){ // del poyecto 2
         var campoTexto = texto;
         this.setState({value: campoTexto});
         //console.log("Escribieron " + campoTexto);    
       }     
     
       handlerButton = () => { // del poyecto 2
         var houses = this.state.value;   
         axios.get( 'https://anapioficeandfire.com/api/houses/' + houses)
             .then( response => {
             console.log(response.data);        
             this.setState({
               response: response.data,
               estado: true
             });
             //console.log(this.state.response);
         });
     
       }      
 
     render(){
 
         if(this.state.estado !== true){
           return (
             <View style={styles.container}>
               <Image
                   style={styles.logo}
                   source={require('../img/iafgot.png')}
               />        
                   <Text style={styles.text}>GAME OF THRONES</Text>
                   <Text style={styles.info}>Una API del Juego de Tronos</Text>
                   <TextInput style={styles.input} placeholder="Elige numero de 0 a 2000" onChangeText={this.handlerText.bind(this)}></TextInput>
                   <TouchableOpacity
                   style={styles.button}
                   onPress={this.handlerButton.bind(this)}>
                   <Text>Buscar casa</Text> 
               </TouchableOpacity>
               <StatusBar style="auto" />
             </View>
           );
         }else{
           return (
             <View style={styles.container}>
               <Image
                   style={styles.logo}
                   source={require('../img/iafgot.png')}
               />
               <Text style={styles.text}>GAME OF THRONES</Text>
               <Text style={styles.info}>Una API del Juego de Tronos</Text>
               <TextInput style={styles.input} placeholder="Elige numero de 0 a 2000" onChangeText={this.handlerText.bind(this)}></TextInput>
               <TouchableOpacity
                   style={styles.button}
                   onPress={this.handlerButton.bind(this)}>
                   <Text>Buscar casa</Text> 
               </TouchableOpacity>
               <ScrollView style={styles.scrollView}>
               <Text style={styles.text}>Nombre: {this.state.response.name}</Text>          
               <Text style={styles.text}>Region: {this.state.response.region}</Text>
               <Text style={styles.text}>Escudo de armas: {this.state.response.coatOfArms}</Text>
               <Text style={styles.text}>Lema: {this.state.response.words}</Text>
               <Text style={styles.text}>Asentamientos: {this.state.response.seats}</Text>
               <Text style={styles.text}>Títulos: {this.state.response.titles}</Text>
               <Text style={styles.text}></Text>
               </ScrollView>
               <StatusBar style="auto" />
             </View>             
           );   
         }
     
       } 
     
 }
 
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: 'black',
         alignItems: 'center',
         justifyContent: 'center',
       },
       text: {
         color: "grey",
         padding: 8,
       },
       info: {
         color: "red",
       },
       logo: {
         height: 350,
         width: 250,
         marginBottom: 10,
       },
       button: {
         alignItems: "center",
         backgroundColor: "red",
         padding: 8,
         borderRadius: 20,
       },
       input: { 
         height: 35,
         width: 200,
         margin: 15,
         padding: 8,
         borderRadius: 20,	
         borderColor: 'red',
         backgroundColor: 'white', 
         borderWidth: 2, 
       }, 
       scrollView: {
         backgroundColor: 'white',
         //marginHorizontal: 20,
         padding: 15,
         marginTop: 20
       },
   });