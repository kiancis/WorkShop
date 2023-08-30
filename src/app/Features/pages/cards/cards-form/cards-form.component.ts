import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/Shared/models/Dtos/card.models';
import { cardService } from 'src/app/Shared/services/cards.service';

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss'],
})
export class CardsFormComponent implements OnInit {
  public form: FormGroup = new FormGroup([]);
  public card!: Card;

  constructor(
    public cardService: cardService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setData();
  }

  submit(): void {
    let cardId = this.activeRouter.snapshot.paramMap.get('id');

    const card: Card = {
      ...this.form.value,
    } as Card;

    card.id = cardId as any;

    card.status = Number(card.status);

    if(card.id == null) this.createCard(card);

    else this.editCard(card);
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      cardType: new FormControl(0, [Validators.required]),
      status: new FormControl(0, [Validators.required]),
      ammount: new FormControl('', [Validators.required]),
      balance: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required]),
    });
  }

  private createCard(card: Card): void {
    this.cardService.post(card).subscribe(
      (data) => {
        alert('Se creó la tarjeta correctamente');
      },
      () => {
        this.resetForm();
        alert('Hubo un error creando la data');
      }
    );
  }

  private editCard(card: Card): void {
    this.cardService.put(card).subscribe(() =>{
      alert('Se editó correctamente')
    }, () => {
      this.resetForm();
      alert('Hubo un error editando la data')
    })
  }

  private setData(): any {
    let cardId = this.activeRouter.snapshot.paramMap.get('id');

    if (cardId != null) {
      this.cardService.get(cardId).subscribe((data) => {
        this.form.patchValue({
          ...data,
        });
      });
    }
  }

  private resetForm(): void {
    this.form.reset();
  }

  public get cardStatus(): any[] {
    return [
      {
        key: 1,
        value: 'Activo',
      },
      {
        key: 2,
        value: 'Inactivo',
      },
    ];
  }

  public get cardType(): any[] {
    return [
      {
        key: 1,
        value: 'VISA',
      },
      {
        key: 2,
        value: 'MASTERCARD',
      },
    ];
  }
}
