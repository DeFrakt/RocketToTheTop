export default class CardPile{
	constructor(){
		//CardPile Array
		this.cp = [];
	}

	addToCP = (card) => {
		//add incoming card to pile Array
		this.cp.push(card);
	}

	getCP = () => {
		//return Array
		return this.cp;
	}

	moveAndRemoveFrom = (cardpile) => {
		//if this carpile is empty, move chosen card to it
		if(this.cp.length == 0){
			//remove from cardpile & add incoming card 
			var card = cardpile.pop();
			this.addToCP(card);
		} else {
			return false;
		}
	}

	removeFromCP = () => {
		//remove 1 card @ end of the Array
		var card = this.getCp().pop();
		return card;
	}
}		



