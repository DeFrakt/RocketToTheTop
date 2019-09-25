export default class Card {

    constructor(suit, faceName, faceValue){
        this.suit = suit;
        this.faceName = faceName;
        this.faceValue = faceValue;
    }

    getCard(){
        return this.faceName + this.suit;
    }

    getFaceValue(){
        return this.faceValue;
    }

    getSuit(){
        return this.suit;
    }
}