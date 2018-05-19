import {SpaceShip} from "./space-ship";
import {Pilot} from "../pilots/pilot";

export class FighterShip extends SpaceShip {

  constructor(pilot?: Pilot) {
    super('Viper', 1, '/assets/viper.png');
    this.pilot = pilot;
  }
}
