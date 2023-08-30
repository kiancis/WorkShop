import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Shared/models/Dtos/card.models';
import { cardService } from 'src/app/Shared/services/cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: cardService ) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardService.gets().subscribe((cards: Card[]) => {
      this.cards = cards;
    })
  }

  deleteCard(cardId: number){
    this.cardService.delete(cardId).subscribe(() =>{
      this.getCards();
      alert('Se eliminó la data correctamente');
    }, ()=>{
      alert('Error eliminando la data')
    })
  }
}
