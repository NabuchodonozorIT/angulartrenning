import {Component, OnInit} from '@angular/core';
import {SpaceShipService} from '../space-ship.service';
import {Observable} from 'rxjs';
import {SpaceShip} from '../space-ship';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-engineers-trash',
  templateUrl: './engineers-trash.component.html',
  styleUrls: ['./engineers-trash.component.css']
})
export class EngineersTrashComponent implements OnInit {
  ships$: Observable<SpaceShip[]>;

  constructor(private spaceShipService: SpaceShipService) {
  }

  ngOnInit() {
    this.ships$ = this.spaceShipService.hangarShips$;
  }

  onSubmit(form: NgForm) {
    this.spaceShipService.removeShip(+form.value.shipIndex);
    form.reset();
  }
}
