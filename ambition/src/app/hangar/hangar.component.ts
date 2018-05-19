import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {SpaceShip} from "../ships/space-ship";
import {BomberShip} from "../ships/bomber-ship";
import {SpaceShipService} from '../ships/space-ship.service';
import {Observable} from 'rxjs';
import {FighterShip} from "../ships/fighter-ship";
import {Pilot} from "../pilots/pilot";
import {PilotRoomComponent} from "../pilots/pilot-room/pilot-room.component";


@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  @Input() hangarHeader: string;
  @Input() pilotHeader: string;
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  selectedPilot: Pilot = null;
  //spaceShips:SpaceShip[] = [];
  spaceShips$: Observable<SpaceShip[]>;

  constructor(private spaceShipService: SpaceShipService) {
  }

  ngOnInit() {
    this.hangarHeader = "Hangar Spaceeee";
    this.pilotHeader = "Cell of convicts";

    //var bomberShip = new BomberShip();
    //bomberShip.health = 15;
    //var bomberShipTwo = new BomberShip();
    //bomberShipTwo.health = 55;
    //var fighterShip = new FighterShip();
    //fighterShip.health = 57;
    //var fighterShipOne = new FighterShip();
    //fighterShipOne.health = 95;
    //
    //this.spaceShips.push(bomberShip);
    //this.spaceShips.push(bomberShipTwo);
    //this.spaceShips.push(fighterShip);
    //this.spaceShips.push(fighterShipOne);

    this.spaceShips$ = this.spaceShipService.hangarShips$;
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave(this.selectedPilot);
    this.pilotRoom.selectPilot(null);
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }
}
