import { AgencyBase } from "@lespantsfancy/agency/lib/AgencyBase";

export class Card extends AgencyBase {
	constructor({ deck, state = {} } = {}) {
		super();

		this.deck = deck;
		this.state = state;
	}

	discard() {
		this.deck.discard(this);
	}
};

export default Card;