import Card from "./Card";

export default class DeckOfCards{
    constructor(){

        //suits array
        const suit = [
            "Diamonds", 
            "Clubs", 
            "Hearts", 
            "Spades"
        ];

        //type of card array
        const type = [
            "2", 
            "3", 
            "4", 
            "5", 
            "6", 
            "7", 
            "8", 
            "9", 
            "10", 
            "Jack", 
            "Queen", 
            "King", 
            "Ace"
        ];

        const deck = [];
        //loop thru suits
        for(var s=0; s < suit.length; s++){
            //loop thru type of card
            for(var t=0; t < type.length; t++){
                const card = new Card(suit[s], type[t], t+2);
                deck.push(card);
            }
        }

        this.deck = deck;
    }

    getDeck(){
        return this.deck;
    }
   
}