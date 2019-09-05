/**
 * @format
 */

import React, {Component} from "react";
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CardPile from './models/CardPile';
import DeckOfCards from './models/DeckOfCards';
import {name as appName} from './app.json';

//create CardPiles 1-4, Deck, DiscardPile

var cardPile1 = new CardPile();
var cardPile2 = new CardPile();
var cardPile3 = new CardPile();
var cardPile4 = new CardPile();
var deck = new DeckOfCards();
var discardPile = new CardPile();

//Tests///////////////////////////////////////
//////////////////////////////////////////////

for(var i=0; i< deck.getDeck().length; i++){
    console.log(deck.getDeck()[i].getCard());
}
console.log("===================================");
cardPile1.addToCP(deck.deal1Card());
cardPile2.moveAndRemoveFrom(cardPile1.getCP());
console.log(cardPile2.getCP()[0].getCard());
// console.log(cardPile2.getCP()[0].getCard());
console.log("===================================");
for(var i=0; i< deck.getDeck().length; i++){
    console.log(deck.getDeck()[i].getCard());
}

//End Tests ///////////////////////////////////
///////////////////////////////////////////////

export default class RocketToTheTop extends Component {
    constructor(props){
        super(props); 

        //intiate game state
        this.state = {
            cardPile1 : cardPile1,
            cardPile2 : cardPile2,
            cardPile3 : cardPile3,
            cardPile4 : cardPile4,
            discardPile : discardPile,
            deck : deck
        }
    }

    initializeGame = () => {
        this.setState({
            cardPile1 : cardPile1,
            cardPile2 : cardPile2,
            cardPile3 : cardPile3,
            cardPile4 : cardPile4,
            discardPile : discardPile,
            deck : deck
        })
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
                <View style={styles.row}>
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
    containerBot:{
        flex: 1,
        backgroundColor: "#e5e4e2",
        alignItems: "center",
        justifyContent: "center"
    },
    row:{
        flexDirection: "row"
    }
});

AppRegistry.registerComponent(appName, () => RocketToTheTop);


