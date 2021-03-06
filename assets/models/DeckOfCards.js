import Card from './Card';

export default class DeckOfCards {
    constructor(){
        //suits array
        this.suit = [
            "Diamonds", 
            "Clubs", 
            "Hearts", 
            "Spades"
        ];

        //type of card array
        this.type = [
            "Two", 
            "Three", 
            "Four", 
            "Five", 
            "Six", 
            "Seven", 
            "Eight", 
            "Nine", 
            "Ten", 
            "Jack", 
            "Queen", 
            "King", 
            "Ace"
        ];

        //creat Deck
        var deck = [];
        //loop thru suits
        for(var s=0; s < this.suit.length; s++){
            //loop thru type of card
            for(var t=0; t < this.type.length; t++){
                var card = new Card(this.suit[s], this.type[t], t+2);
                deck.push(card);
            }
        }
        //shuffle deck
        var shuffledDeck = this.shuffleDeck(deck);
        //set deck
        this.deck = shuffledDeck;
    }

    getDeck = () => {
        //returns Array
        return this.deck;
    }

    shuffleDeck = (array) => {
        var m = array.length, t, i;

        // While there remain elements to shuffle
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
    }
    
    deal1Card = () => {
        var dealing = this.getDeck().shift();
        return dealing;
    }
}
