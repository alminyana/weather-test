export class Main {
  public temp: number;
  private pressure: number;
  private humidity: number;
  private temp_min: number;
  private temp_max: number;

  constructor(temp:number, pressure:number, humidity: number, temp_min: number, temp_max: number) {
    this.temp = temp;
    this.pressure = pressure;
    this.humidity = humidity;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
  }

}
