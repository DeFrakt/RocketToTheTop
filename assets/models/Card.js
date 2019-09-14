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
        return this.faceName + " of " + this.suit;
    }
    
    getPicture(){
        image = {uri: require( '../images/2_Clubs.png' )};
        return image;

    }

}