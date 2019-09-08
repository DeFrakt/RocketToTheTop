/**
 * @format
 */

import React, {Component} from "react";
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CardPile from './models/CardPile';
import DeckOfCards from './models/DeckOfCards';
import {name as appName} from './app.json';

//create CardPiles 1-4, Deck, DiscardPile

var CARD_PILE1 = new CardPile();
var CARD_PILE2 = new CardPile();
var CARD_PILE3 = new CardPile();
var CARD_PILE4 = new CardPile();
var DECK = new DeckOfCards();
var DISCARD_PILE = new CardPile();

//Tests///////////////////////////////////////
//////////////////////////////////////////////

for(var i=0; i< DECK.getDeck().length; i++){
    console.log(DECK.getDeck()[i].getCard());
}
console.log("===================================");
CARD_PILE1.addToCP(DECK.deal1Card());
CARD_PILE2.moveAndRemoveFrom(CARD_PILE1.getCP());
console.log(CARD_PILE2.getCP()[0].getCard());
// console.log(CARD_PILE2.getCP()[0].getCard());
console.log("===================================");
for(var i=0; i< DECK.getDeck().length; i++){
    console.log(DECK.getDeck()[i].getCard());
}

//End Tests ///////////////////////////////////
///////////////////////////////////////////////

export default class RocketToTheTop extends Component {
    constructor(props){
        super(props); 

        //intiate game state
        this.state = {
            cardPile1 : CARD_PILE1,
            cardPile2 : CARD_PILE2,
            cardPile3 : CARD_PILE3,
            cardPile4 :CARD_PILE4,
            discardPile : DISCARD_PILE,
            deck : DECK,
            score: -52
        }
    }
    
    //Start Game
    componentDidMount(){
        this.initializeGame();
    }

    //Set React-Native State
    initializeGame = () => {
        this.setState({
            cardPile1 : CARD_PILE1,
            cardPile2 : CARD_PILE2,
            cardPile3 : CARD_PILE3,
            cardPile4 :CARD_PILE4,
            discardPile : DISCARD_PILE,
            deck : DECK,
            score: -52
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerTop}>
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
           
                <View style={styles.containerBot}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => this.deal()} style={styles.cardPile}>

                        </TouchableOpacity>
                    </View>
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
    containerTop:{
        flex: 2,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    containerBot:{
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "flex-end",
    
    },
    row:{
        flexDirection: "row"
    }
});

AppRegistry.registerComponent(appName, () => RocketToTheTop);


