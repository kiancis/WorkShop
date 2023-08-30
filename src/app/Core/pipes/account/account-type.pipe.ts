import { Pipe, PipeTransform } from '@angular/core';
import { accountType } from '../../Enums/account.enum';

@Pipe({
  name: 'accountType'
})
export class AccountTypePipe implements PipeTransform {

  transform(value: accountType, ok:boolean): unknown {
    switch(value){
      case 1:
        return 'Checking';
      case 2:
        return 'Saving';
      default:
        return 'Not found';
    }
  }

}
