import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {SpaceShipService} from './space-ship.service';

@Injectable({
  providedIn: 'root'
})
export class EngineersTrashGuard implements CanActivate {
  constructor(private spaceShipService: SpaceShipService) {
  }

  canActivate(): boolean {
    const ships = this.spaceShipService.hangarShips$.getValue();
    if (ships.length === 0) {
      alert('Nie ma statków w hangarze!');
      return false;
    } else {
      return true;
    }
  }
}
