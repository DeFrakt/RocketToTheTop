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
        this.deck = deck;

    }

    getDeck = () => {
        var shuffledDeck = this.shuffleDeck(this.deck);
        return shuffledDeck;
    }

    shuffleDeck = (array) => {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
    }
}
