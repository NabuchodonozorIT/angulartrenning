import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {Pilot} from "../pilot";
import {PilotService} from "../pilot.service";

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  @Output() pilotSelected = new EventEmitter();
  selectedPilot:Pilot = null;

  pilots:Pilot[] = [];

  constructor(private pilotService:PilotService) {
  }

  selectPilot(pilot:Pilot) {
    this.selectedPilot = pilot;
    this.pilotSelected.emit(pilot);
  }

  pilotLeave(pilot:Pilot) {
    const pilotIndex = this.pilots.indexOf(pilot);
    this.pilots.splice(pilotIndex, 1);
  }

  pilotReturn(pilot:Pilot) {
    this.pilots.push(pilot);
  }

  ngOnInit() {
    let me = this;
    //me.pilots.push(new Pilot('Sarah Kerrigan', '/assets/sarah.jpg'));
    //me.pilots.push(new Pilot('Arthas Menethil', '/assets/arthas.jpg'));
    //me.pilots.push(new Pilot('Momad Prophet', '/assets/prophet.jpg'));
    this.pilotService.getPilots()
      .subscribe(this.onGetSuccess.bind(this), this.onGetFailure.bind(this));
  }

  private onGetSuccess(pilots:Pilot[]) {
    this.pilots = pilots;
  }

  private onGetFailure() {
    alert('Nie udało się pobrać pilotów!');
  }

}
