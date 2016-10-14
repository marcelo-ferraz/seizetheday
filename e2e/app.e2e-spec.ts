import { SeizeTheDayPage } from './app.po';

describe('seize-the-day App', function() {
  let page: SeizeTheDayPage;

  beforeEach(() => {
    page = new SeizeTheDayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
