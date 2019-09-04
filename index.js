/**
 * @format
 */

import React, {Component} from "react";
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Card from './models/Card';
import DeckOfCards from './models/DeckOfCards';
import {name as appName} from './app.json';



const cardone = new Card("Spaces","3", 3);
const deck = new DeckOfCards();



export default class RocketToTheTop extends Component {
    constructor(props){
        super(props); 
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.cardPile}>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardPile}>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardPile}>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardPile}>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardPile:{
        borderWidth: 5,
        width: 100,
        height: 150,
        alignContent: "center",
        justifyContent: "center"
    },
    container:{
        flex: 1,
        backgroundColor: "#e5e4e2",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    row:{
        flexDirection: "row"
    }
});

AppRegistry.registerComponent(appName, () => RocketToTheTop);


