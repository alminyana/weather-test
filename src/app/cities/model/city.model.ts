import { Main } from "./main.model";
import { Coordinates } from './coordinates.model';

export class City {
  private id: number;
  private name: string;
  private main: Main;
  private coords: Coordinates;

  constructor(id: number, name: string, main: Main, coords: Coordinates) {
    this.id = id;
    this.name = name;
    this.main = main;
  }

  public getName(): string {
    return this.name;
  }

  public get getTemp(): number {
    return this.main.temp;
  }

}
