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
    // this.getAllCards();
  }

  deck: Card[] = [];
  getAllCards() {
    this.cardS.getAllCards().valueChanges().subscribe({
      next: (value: Card[]) => {
        this.deck = value;
      }
    })
  }



}
