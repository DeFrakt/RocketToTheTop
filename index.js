/**
 * @format
 */

import React, {Component} from "react";
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import CardPile from './assets/models/CardPile';
import DeckOfCards from './assets/models/DeckOfCards';
import {name as appName} from './app.json';
import { images } from "./assets/views/ImagePath";

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

    cardImage = (currentCard) => {
        switch(currentCard)
                {
                    case "TwoClubs" : return images.TwoClubs;
                    case "TwoSpades" : return images.TwoSpades;
                    case "TwoDiamonds" : return images.TwoDiamonds;
                    case "TwoHearts" : return images.TwoHearts;
                    case "ThreeClubs" : return images.ThreeClubs;
                    case "ThreeSpades" : return images.ThreeSpades;
                    case "ThreeDiamonds" : return images.ThreeDiamonds;
                    case "ThreeHearts" : return images.ThreeHearts;
                    case "FourClubs" : return images.FourClubs;
                    case "FourSpades" : return images.FourSpades;
                    case "FourDiamonds" : return images.FourDiamonds;
                    case "FourHearts" : return images.FourHearts;
                    case "FiveClubs" : return images.FiveClubs;
                    case "FiveSpades" : return images.FiveSpades;
                    case "FiveDiamonds" : return images.FiveDiamonds;
                    case "FiveHearts" : return images.FiveHearts;
                    case "SixClubs" : return images.SixClubs;
                    case "SixSpades" : return images.SixSpades;
                    case "SixDiamonds" : return images.SixDiamonds;
                    case "SixHearts" : return images.SixHearts;
                    case "SevenClubs" : return images.SevenClubs;
                    case "SevenSpades" : return images.SevenSpades;
                    case "SevenDiamonds" : return images.SevenDiamonds;
                    case "SevenHearts" : return images.SevenHearts;
                    case "EightClubs" : return images.EightClubs;
                    case "EightSpades" : return images.EightSpades;
                    case "EightDiamonds" : return images.EightDiamonds;
                    case "EightHearts" : return images.EightHearts;
                    case "NineClubs" : return images.NineClubs;
                    case "NineSpades" : return images.NineSpades;
                    case "NineDiamonds" : return images.NineDiamonds;
                    case "NineHearts" : return images.NineHearts;
                    case "TenClubs" : return images.TenClubs;
                    case "TenSpades" : return images.TenSpades;
                    case "TenDiamonds" : return images.TenDiamonds;
                    case "TenHearts" : return images.TenHearts;
                    case "JackClubs" : return images.JackClubs;
                    case "JackSpades" : return images.JackSpades;
                    case "JackDiamonds" : return images.JackDiamonds;
                    case "JackHearts" : return images.JackHearts;
                    case "QueenClubs" : return images.QueenClubs;
                    case "QueenSpades" : return images.QueenSpades;
                    case "QueenDiamonds" : return images.QueenDiamonds;
                    case "QueenHearts" : return images.QueenHearts;
                    case "KingClubs" : return images.KingClubs;
                    case "KingSpades" : return images.KingSpades;
                    case "KingDiamonds" : return images.KingDiamonds;
                    case "KingHearts" : return images.KingHearts;
                    case "AceClubs" : return images.AceClubs;
                    case "AceSpades" : return images.AceSpades;
                    case "AceDiamonds" : return images.AceDiamonds;
                    case "AceHearts" : return images.AceHearts;
                    default: console.log("Does not match Card"); break;
                }
    }

    cardState = (card) => {
        console.log(card)
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
                //current card
                var currentCard = getCardPile[i].getCard();
                //get Cardpile array and Find Card
                var source = this.cardImage(currentCard);
                //add image source to array
                cardPileArray.push(
                    <TouchableOpacity key={i+1} onPress={()=>this.cardState(currentCard)}>
                        <Image key={i+1} style={styles.card} source={source}></Image>
                    </TouchableOpacity>
                        );
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
                        <View style={styles.cardPile}>
                      
                                {this.renderCard(1)}
                 
                        </View>
                        <View style={styles.cardPile}>
                            {this.renderCard(2)}  
                        </View>
                        <View style={styles.cardPile}>
                            {this.renderCard(3)} 
                        </View>
                        <View style={styles.cardPile}>
                            {this.renderCard(4)} 
                        </View>
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
        marginTop: -100,
        position: "relative",
        top: 100,

    },
    cardPile:{
        borderWidth: 5,
        width: 100,
        height: 150,
        alignContent: "center",
        justifyContent: "center"
    },
    cardPileGhost:{
        color: "red",
        borderWidth: 5,
        width: 100,
        height: 750,
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


