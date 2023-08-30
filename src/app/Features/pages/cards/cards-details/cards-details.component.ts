import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/Shared/models/Dtos/card.models';
import { cardService } from 'src/app/Shared/services/cards.service';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss']
})
export class CardsDetailsComponent implements OnInit {
  card!:Card;

  constructor(private activeRouter: ActivatedRoute, private cardService: cardService) { }

  ngOnInit(): void {
    this.getCard();
  }

  getCard(){
    let cardId = this.activeRouter.snapshot.paramMap.get('id');
    this.cardService.get(cardId).subscribe(data =>{
      this.card = data;
      console.log(data);
    }, error =>{
      alert(error)
    });
  }
}
