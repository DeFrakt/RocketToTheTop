/**
 * @format
 */

import React, {Component} from "react";
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import CardPile from './assets/models/CardPile';
import DeckOfCards from './assets/models/DeckOfCards';
import {name as appName} from './app.json';

//create CardPiles 1-4, Deck, DiscardPile

const CARD_PILE1 = new CardPile();
const CARD_PILE2 = new CardPile();
const CARD_PILE3 = new CardPile();
const CARD_PILE4 = new CardPile();
const DECK = new DeckOfCards();
const DISCARD_PILE = new CardPile();

//Tests///////////////////////////////////////
//////////////////////////////////////////////

for(var i=0; i< DECK.getDeck().length; i++){
    console.log(DECK.getDeck()[i].getCard());
}
console.log("===================================");
// CARD_PILE1.addToCP(DECK.deal1Card());
// CARD_PILE1.addToCP(DECK.deal1Card());
// CARD_PILE2.moveAndRemoveFrom(CARD_PILE1.getCP());
// console.log(CARD_PILE2.getCP()[0].getCard());
// console.log(CARD_PILE2.getCP()[0].getCard());
console.log("===================================");
// for(var i=0; i< DECK.getDeck().length; i++){
//     console.log(DECK.getDeck()[i].getCard());
// }
console.log("===================================");

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
            cardPile4 : CARD_PILE4,
            discardPile : DISCARD_PILE,
            deck : DECK,
            score: -52
        }
    }

    //Start Game
    componentDidMount = () => {
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

    deal = () => {
        //deal to cardpiles 1-4
        this.state.cardPile1.addToCP(this.state.deck.deal1Card());
        this.state.cardPile2.addToCP(this.state.deck.deal1Card());
        this.state.cardPile3.addToCP(this.state.deck.deal1Card());
        this.state.cardPile4.addToCP(this.state.deck.deal1Card());
        //update set to cardpiles 1-4
        this.setState({
            cardPile1: this.state.cardPile1,
            cardPile2: this.state.cardPile2,
            cardPile3: this.state.cardPile3,
            cardPile4: this.state.cardPile4
        });
        
        // console.log("Dealing");
        // for(var i=0; i< this.state.cardPile1.getCP().length; i++){
        //     console.log(this.state.cardPile1.getCP()[i].getCard());
        // } 
    }

    renderCard = (cardPilePosition) => {
        var cardPileArray = [];
        // Check if Cards are in Array to render for pile\
        switch(cardPilePosition)
        {
            case 1: currentCardPile = this.state.cardPile1; break;
            case 2: currentCardPile = this.state.cardPile2; break;
            case 3: currentCardPile = this.state.cardPile3; break;
            case 4: currentCardPile = this.state.cardPile4; break;
        }
        //get CardPile
        var getCardPile = currentCardPile.getCP();
        //Render Card if CardPile and Deck do NOT equal 0
        if(getCardPile.length > 0 && this.state.deck.getDeck().length > 0){
            //render CardPile
            for(var i=0; i< getCardPile.length; i++){
                // console.log("====================================");
                // console.log("Render");
                // console.log(cardpileRender.getCP()[i].getCard());
                // console.log("====================================");
                var cardAsset = "<Image style={styles.card} source={require( './assets/images/" + getCardPile[i].getPic() + ".png' )}></Image>";
                console.log(cardAsset);
                cardPileArray.push(cardAsset);
                
            }
            return cardPileArray;
        }
        // else if check for win?
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.cardPile}>
                            {this.renderCard()}

                                
                        
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPile}>
                            <Image style={styles.card} source={require( "./assets/images/2_Clubs.png" )}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPile}>
                        <Image style={styles.card} source={require( "./assets/images/Ace_Hearts.png" )}></Image>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardPile}>
                        <Image style={styles.card} source={require( "./assets/images/Ace_Clubs.png" )}></Image>

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
    card:{
        width: 90,
        height: 140,
    },
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


