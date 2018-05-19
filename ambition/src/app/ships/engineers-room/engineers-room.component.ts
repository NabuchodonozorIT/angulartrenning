import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SpaceShipType} from '../space-ship-type';
import {SpaceShipFormValues} from "../space-ship-form-values";
import {SpaceShip} from "../space-ship";
import {SpaceShipService} from "../space-ship.service";
import {map} from "rxjs/internal/operators/map";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  availableTypes = SpaceShipType;
  isProducing = false;
  shipsCount$: Observable<number>;

  constructor(private spaceShipService: SpaceShipService) {
    this.shipsCount$ = this.spaceShipService.hangarShips$.pipe(
      map((ships: SpaceShip[]) => ships.length)
    );
  }

  ngOnInit() {
  }

  onSubmit(formValues: SpaceShipFormValues) {
    console.log(formValues);
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
      .subscribe({complete: () => this.isProducing = false});
  }

}
