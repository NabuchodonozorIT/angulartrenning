import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Pilot} from "../pilot";
import {PilotRoomComponent} from "../pilot-room/pilot-room.component";

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  @Input() pilot: Pilot;
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
