import {Pilot} from "../pilots/pilot";

export abstract class SpaceShip {

  modelName:string;
  imageUrl:string;
  health = this.randomIntFromInterval(25, 100);
  activeShields = true;
  quantity = this.randomIntFromInterval(1, 9);
  activeWeapon = true;
  power:number;
  pilot:Pilot = null;

  constructor(modelName:string, power:number, imageUrl:string) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
    this.power = power * this.randomIntFromInterval(25, 50);
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
