import { TilesPage } from './app.po';

describe('tiles App', () => {
  let page: TilesPage;

  beforeEach(() => {
    page = new TilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
