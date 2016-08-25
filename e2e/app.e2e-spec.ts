import { WeatherScreenPage } from './app.po';

describe('weather-screen App', function() {
  let page: WeatherScreenPage;

  beforeEach(() => {
    page = new WeatherScreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
