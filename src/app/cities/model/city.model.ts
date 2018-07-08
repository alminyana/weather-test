import { Main } from "./main.model";

export class City {
  private id: number;
  private name: string;
  private main: Main;

  constructor(id: number, name: string, main: Main) {
    this.id = id;
    this.name = name;
    this.main = main;
  }

  private getName(): string {
    return this.name;
  }

  private getTemp(): number {
    return this.main.temp;
  }


}
