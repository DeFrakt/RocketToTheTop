/**
 * @format
 */

import React, {Component} from "react";
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CardPile from './models/CardPile';
import DeckOfCards from './models/DeckOfCards';
import {name as appName} from './app.json';



var deck = new DeckOfCards();
for(var i=0; i< deck.getDeck().length; i++){
    console.log(deck.getDeck()[i].getCard());
}
console.log("===================================");
var cardPile1 = new CardPile();
var cardPile2 = new CardPile();
cardPile1.addToCP(deck.deal1Card());
cardPile2.moveAndRemoveFrom(cardPile1.getCP());
console.log(cardPile2.getCP()[0].getCard());
// console.log(cardPile2.getCP()[0].getCard());
console.log("===================================");
for(var i=0; i< deck.getDeck().length; i++){
    console.log(deck.getDeck()[i].getCard());
}





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


