import { SportsPage } from './app.po';

describe('sports App', () => {
  let page: SportsPage;

  beforeEach(() => {
    page = new SportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
