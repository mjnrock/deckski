import { AgencyBase } from "@lespantsfancy/agency/lib/AgencyBase";

import Card from "./Card";
import CardCollection from "./CardCollection";

export class Deck extends AgencyBase {
	constructor({ cards = [], shuffle = false } = {}) {
		super();

		this.cards = cards;

		for(let i = 0; i < +shuffle; i++) {
			this.shuffle();
		}
	}

	get remaining() {
		return this.cards.length;
	}
	get discarded() {
		return this.discard.length;
	}

	shuffle() {
		var m = this.cards.length, t, i;

		// While there remain elements to shuffle…
		while (m) {

			// Pick a remaining element…
			i = Math.floor(Math.random() * m--);

			// And swap it with the current element.
			t = this.cards[ m ];
			this.cards[ m ] = this.cards[ i ];
			this.cards[ i ] = t;
		}

		return this.cards;
	}


	draw(qty = 1) {
		const cards = this.cards.splice(0, qty);

		if(cards.length > 1) {
			return cards;
		}

		return (cards || [])[ 0 ];
	}
	drawFromBottom(qty = 1) {
		const cards = this.cards.splice(-qty, qty);

		if(cards.length > 1) {
			return cards;
		}

		return (cards || [])[ 0 ];
	}
	
	add(...cards) {
		for(let card of cards) {
			if(card instanceof CardCollection) {
				card.addToDeck(this);
			} else {
				card.deck = this;
	
				this.cards.push(card);
			}
		}

		return this;
	}
	remove(...cards) {
		if(cards instanceof CardCollection) {
			cards = [ ...cards.cards ];

			//FIXME Finish remove cards from the deck prototype if a card collection
			// this.cards = this.cards.filter(card => {
				
			// });
		} else {
			this.cards = this.cards.filter(card => !cards.includes(card));
		}

		return this;
	}

	discard(...cards) {
		for(let card of cards) {
			if(this.cards.includes(card)) {
				
			}
		}
	}
};

export default Deck;