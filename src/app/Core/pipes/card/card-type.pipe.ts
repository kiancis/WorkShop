import { Pipe, PipeTransform } from '@angular/core';
import { cardType } from '../../Enums/card.enum';

@Pipe({
  name: 'cardType'
})
export class CardTypePipe implements PipeTransform {

  transform(value: cardType, ok:boolean): unknown {
    switch(value){
      case 1:
        return 'VISA';
      case 2:
        return 'MASTERCARD';
      default:
        return 'Not found';
    }
  }

}
