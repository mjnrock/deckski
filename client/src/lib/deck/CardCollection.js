import { AgencyBase } from "@lespantsfancy/agency/lib/AgencyBase";

export class CardCollection extends AgencyBase {
	constructor(cards = []) {
		super();
		
		this._cards = new Set(cards);
	}

	get cards() {
		return [ ...this._cards ];
	}
	set cards(cards) {
		this._cards = new Set(cards);
	}

	add(...cards) {
		for(let card of cards) {
			this._cards.add(card);
		}

		return this;
	}
	remove(...cards) {
		for(let card of cards) {
			this._cards.delete(card);
		}

		return this;
	}

	/**
	 * Conjunctive test, if more than one (1) <Card> is passed
	 */
	has(...cards) {
		let results = [];
		for(let card of cards) {
			results.push(this._cards.has(card));
		}

		if(cards.length > 1) {
			return results.every(v => v === true);
		}

		return results[ 0 ];
	}
	
	get isEmpty() {
		return !this._cards.size;
	}
	empty() {
		this._cards = new Set();
	}

	addToDeck(deck, { copyCards = false } = {}) {
		if(copyCards) {

		} else {
			deck.add(...this._cards);
			this.empty();
		}
	}
};

export default CardCollection;