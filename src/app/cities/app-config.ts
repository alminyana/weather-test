export class AppConfig {

  public static key: string = "&appid=4bf0c0449365422e36a0582c746b24d6";

  public static url: string = "http://api.openweathermap.org/data/2.5/weather?id=";

  public static cities: {name: string, id: number}[] = [
    {
        name: 'Sao Paolo',
        id: 3448439
    },
    {
        name: 'Buenos Aires',
        id: 3435910
    },
    {
        name: 'Lima',
        id: 3936456
    },
    {
        name: 'Santiago de Compostela',
        id: 6357346
    },
  ];



  // getKey(): string {
  //   return this.key;
  // }
  //
  // getUrl(): string {
  //   return this.getCityTemp;
  // }

}
