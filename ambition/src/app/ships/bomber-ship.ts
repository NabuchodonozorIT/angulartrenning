import {SpaceShip} from "./space-ship";
import {Pilot} from "../pilots/pilot";

export class BomberShip extends SpaceShip {

  constructor(pilot?: Pilot) {
    super('Raptor', 100, '/assets/Grox.png');
    this.pilot = pilot;
  }
}
