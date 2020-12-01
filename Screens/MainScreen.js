
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export class MainScreen extends Component{
    
    render(){
        return (
            <View style={styles.container}>
                 
                 <Text style={styles.text}>GAME OF THRONES</Text>
                 <Text style={styles.info}>Una API del Juego de Tronos</Text>
                 <Image
                  style={styles.logo}
                  source={require('../img/iafgot5.jpg')}
                  />
                 <Text style={styles.info}>A través de esta App vas a poder consultar por un personaje o una casa. Para ello deberás elegir la opción en el menú. </Text>
                 <Text style={styles.text}>"GAME OF THRONES" es la aclamada serie de HBO basada en los exitosos libros de George R. R. Martin.</Text>
                 <StatusBar style="auto" />
            </View>
            
          );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    text: {
        color: "grey",
        padding: 8,
        marginLeft: 15,
        marginRight: 15,
      },
      info: {
        color: "red",
        marginLeft: 20,
        marginRight: 20,
      },
      logo: {
        height: 450,
        width: 370,
        marginBottom: 10,
      },
});