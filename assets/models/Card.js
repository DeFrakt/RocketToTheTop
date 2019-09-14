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

    getPic(){
        return "<Image style={styles.card} source={require( './assets/images/" + this.faceName + "_" + this.suit +".png' )}></Image>";
    }

}