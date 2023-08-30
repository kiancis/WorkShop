import { Pipe, PipeTransform } from '@angular/core';
import { userStatus } from '../../Enums/users.enum';

@Pipe({
  name: 'userState'
})
export class UserStatePipe implements PipeTransform {

  transform(value: userStatus, ok:boolean): unknown {
    switch(value){
      case 1:
        return 'Activo';
      case 2:
        return 'Inactivo';
      case 3:
        return 'Pendiente';
      case 4:
        return 'Bloqueado'
      default:
        return 'Not found';
    }
  }

}
