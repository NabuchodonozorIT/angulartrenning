import {Injectable} from '@angular/core';
import {SpaceShipFormValues} from "./space-ship-form-values";
import {Observable} from "rxjs/index";
import {SpaceShip} from "./space-ship";
import {SpaceShipType} from "./space-ship-type";
import {FighterShip} from "./fighter-ship";
import {BomberShip} from "./bomber-ship";
import {timer} from "rxjs/index";
import {map} from "rxjs/internal/operators/map";
import {take} from "rxjs/internal/operators/take";
import {BehaviorSubject} from "rxjs/index";
import {tap} from "rxjs/internal/operators/tap";

@Injectable({
  providedIn: 'root'
})

export class SpaceShipService {

  static shipProductionTime = 2020;
  hangarShips$ = new BehaviorSubject<SpaceShip[]>([]);

  constructor() {
  }

  produceShips(formValues: SpaceShipFormValues): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return timer(SpaceShipService.shipProductionTime, SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
      tap((spaceShip) => this.hangarShips$.next([...this.hangarShips$.getValue(), spaceShip]))
    );
  }

  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips$.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips$.next(ships);
  }
}
