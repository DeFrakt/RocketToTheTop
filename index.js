/**
 * @format
 */

 //import React Modules
import React, { Component } from "react";
import { 
    AppRegistry, 
    Animated,
    Image,
    PandResponder,
    Text, 
    TouchableOpacity, 
    View
} from 'react-native';
import { name as appName } from './app.json';

//Import Models
import CardPile from './assets/models/CardPile';
import DeckOfCards from './assets/models/DeckOfCards';

//Import Controllers
import cardImage from './assets/controllers/cardImage';

//Import Views
import { styles } from "./assets/views/Styles";



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
            score: -52,
            pan: new Animated.ValueXY()
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
            score: -52,
            pan: new Animated.ValueXY()
        })
    }

    cardState = (card) => {
        //Remove
        this.removeCard(card);
        //Check to see if Card can Move
        this.moveCard(card);
    }

    deal = () => {
        if(this.state.deck.getDeck().length != 0){
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
        }
    }

    findPileRemoveCard = (pile) => {
        switch(pile){
            case 1:
                //remove Card from Pile 1  
                this.state.cardPile1.removeFromCP();
                //Set State CardPile 1
                this.setState({
                    cardPile1: this.state.cardPile1,
                }); 
                console.log("Removing From Pile1");
                break;
            case 2:
                //remove Card from Pile 1  
                this.state.cardPile2.removeFromCP();
                //Set State CardPile 1
                this.setState({
                    cardPile2: this.state.cardPile2,
                }); 
                console.log("Removing From Pile2");
                break;
            case 3:
                //remove Card from Pile 1  
                this.state.cardPile3.removeFromCP();
                //Set State CardPile 1
                this.setState({
                    cardPile3: this.state.cardPile3,
                }); 
                console.log("Removing From Pile3");
                break;
            case 4:
                //remove Card from Pile 1  
                this.state.cardPile4.removeFromCP();
                //Set State CardPile 1
                this.setState({
                    cardPile4: this.state.cardPile4,
                }); 
                console.log("Removing From Pile4");
                break;
        }
    }

    moveCard = (card) =>{
        //break apart card object
        var pickedValue = card.getFaceValue();
        var pickedSuit = card.getSuit();
        var pickedCard = card.getCard();
        //declare empty piles array
        var emptyPiles = [];
        console.log("& Check if Card can move", pickedCard);
        //are any piles empty?
        //get cardpile 1-4
        var cardPile1 = this.state.cardPile1.getCP().length;
        var cardPile2 = this.state.cardPile2.getCP().length;
        var cardPile3 = this.state.cardPile3.getCP().length;
        var cardPile4 = this.state.cardPile4.getCP().length;
        //find cardpiles = 0
        if(cardPile1 === 0){
            emptyPiles.push(1);
        }
        if(cardPile2 === 0){
            emptyPiles.push(2);
        }
        if(cardPile3 === 0){
            emptyPiles.push(3);
        }
        if(cardPile4 === 0){
            emptyPiles.push(4);
        }
        for(i=0; i < emptyPiles.length; i++){
            console.log(emptyPiles[i]);    
        }
    }

    removeCard = (card) => {
        //break apart card object
        var pickedValue = card.getFaceValue();
        var pickedSuit = card.getSuit();
        var pickedCard = card.getCard();
        console.log("Pick Card", pickedValue, pickedSuit);
        //get cardpile 1-4
        var cardPile1 = this.state.cardPile1.getCP();
        var cardPile2 = this.state.cardPile2.getCP();
        var cardPile3 = this.state.cardPile3.getCP();
        var cardPile4 = this.state.cardPile4.getCP();
        //get last Card object in array 
        //distripute to variables 
        //& check if array is 0 (will throw error), do not create variables
        if (cardPile1.length != 0){
            var CP1Obj = cardPile1[cardPile1.length - 1];
            var cp1LastCard = CP1Obj.getCard();
            var cp1Suit = CP1Obj.getSuit();
            var cp1Value = CP1Obj.getFaceValue()
        }
        if (cardPile2.length != 0){
            var CP2Obj = cardPile2[cardPile2.length - 1];
            var cp2LastCard = CP2Obj.getCard();
            var cp2Suit = CP2Obj.getSuit();
            var cp2Value = CP2Obj.getFaceValue()
        }
        if (cardPile3.length != 0){
            var CP3Obj = cardPile3[cardPile3.length - 1];
            var cp3LastCard = CP3Obj.getCard();
            var cp3Suit = CP3Obj.getSuit();
            var cp3Value = CP3Obj.getFaceValue()
        }
        if (cardPile4.length != 0){
            var CP4Obj = cardPile4[cardPile4.length - 1];
            var cp4LastCard = CP4Obj.getCard();
            var cp4Suit = CP4Obj.getSuit();
            var cp4Value = CP4Obj.getFaceValue()
        }

        //Find incoming pile number, to remove card for check
        switch(pickedCard){
            case cp1LastCard: pile = 1; break;
            case cp2LastCard: pile = 2; break;
            case cp3LastCard: pile = 3; break;
            case cp4LastCard: pile = 4; break;
            default: pile = 0;
        }
        console.log("IncomingPile#", pile);
        
        //remove card
        if(pickedSuit === cp1Suit && pile != 1){
            if(pickedValue < cp1Value){
                this.findPileRemoveCard(pile);
            }
        }else if(pickedSuit === cp2Suit && pile != 2){
            if(pickedValue < cp2Value){
                this.findPileRemoveCard(pile);
            }
        } else if(pickedSuit === cp3Suit && pile != 3){
            if(pickedValue < cp3Value){
                this.findPileRemoveCard(pile);
            }
        } else if(pickedSuit === cp4Suit && pile != 4){
            if(pickedValue < cp4Value){
                this.findPileRemoveCard(pile);
            }
        }   
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
        if(getCardPile.length > 0){
            //render CardPile
            for(var i=0; i< getCardPile.length; i++){
                //get current card object and its current card
                var cardObj = getCardPile[i];
                var currentCard = cardObj.getCard();
                //get Cardpile array and Find Card
                var source = cardImage(currentCard);
                //add image source to array
                cardPileArray.push(
                    <TouchableOpacity key={i+1} onPress={()=>this.cardState(cardObj)}>
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
                        <View style={styles.column}>
                            {this.renderCard(1)}
                        </View>
                        <View style={styles.column}>
                            {this.renderCard(2)}
                        </View>
                        <View style={styles.column}>
                            {this.renderCard(3)}
                        </View>
                        <View style={styles.column}>
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

AppRegistry.registerComponent(appName, () => RocketToTheTop);


