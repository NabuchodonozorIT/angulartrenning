import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shipName'
})
export class ShipNamePipe implements PipeTransform {

  transform(shipName: string, pilotName: string): string {
    return pilotName ? `${shipName} (${pilotName})` : shipName;
  }

}
