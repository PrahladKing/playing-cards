export class Card {
    value: CardValue;
    suit: CardSuit;
    isJoker: boolean;
    color: CardColor;

    constructor(suit: CardSuit, value: CardValue, isJoker = false) {
        this.value = value;
        this.suit = suit;
        this.isJoker = isJoker;
        this.color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
    }
}

// Defining the possible suits of a playing card
export type CardSuit = 'spade' | 'heart' | 'club' | 'diamond';

// Defining the possible number cards, including Ace (represented as "A")
type NumberCard = 'A' | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

// Defining the face cards
type FaceCard = 'J' | 'Q' | 'K';

// Combining number cards and face cards into a single type for card values
export type CardValue = NumberCard | FaceCard;

// Defining colors for the suits
type CardColor = 'red' | 'black';