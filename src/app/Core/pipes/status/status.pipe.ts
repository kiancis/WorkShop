import { Pipe, PipeTransform } from '@angular/core';
import { status } from '../../Enums/status.enum';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipe implements PipeTransform {

  transform(value: status, ok:boolean): unknown {
    switch(value){
      case 1:
        return 'Activo';
      case 2:
        return 'Inactivo';
      default:
        return 'Not found';
    }
  }

}
