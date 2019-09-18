export default class Card {

    constructor(suit, faceName, faceValue){
        this.suit = suit;
        this.faceName = faceName;
        this.faceValue = faceValue;
    }

    getFaceValue(){
        return this.faceValue;
    }

    getCard(){
        return this.faceName + this.suit;
    }

    getPicture(){

        return "TwoSpades";
    }
}