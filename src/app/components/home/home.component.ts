import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { DeckComponent } from './deck/deck.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DeckComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  crud = inject(CrudService);
  
  ngOnInit(): void {
    // this.getUsers();
  }

  getUsers() {
    this.crud.getUsers().valueChanges().subscribe({
      next: (value) => {
        console.log(value);
      },
    })
  }
}
