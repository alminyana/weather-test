import { OpenweatherPage } from './app.po';

describe('openweather App', () => {
  let page: OpenweatherPage;

  beforeEach(() => {
    page = new OpenweatherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
