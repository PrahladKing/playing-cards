import { Component, inject, OnInit } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { Card, CardSuit, CardValue } from '../../../models/card.model';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.css'
})
export class DeckComponent implements OnInit{

  cardS = inject(CardService);
  ngOnInit(): void {
    this.getAllCards();
  }

  startGame() {

  }

  getAllCards() {
    this.cardS.getAllCards().valueChanges().subscribe({
      next: (value: Card[]) => {
        this.shuffledDeck = this.shuffleCards(value);
        console.log(this.shuffledDeck);
      }
    })
  }

  shuffledDeck: Card[] = [];
  shuffleCards(deck: Card[]) {
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }
    return deck;
  }


}
