import { inject, Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { environment } from '../../environments/environment.development';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  private dbPath = environment.firebaseURL
  private db = inject(AngularFireDatabase)
  cardsRef: AngularFireList<any>;
  constructor() { 
    this.cardsRef = this.db.list(this.dbPath)
  }

  createCard(card: Card) {
    this.cardsRef.push(card);
  }


  getAllCards() {
    return this.cardsRef;
  }

}
