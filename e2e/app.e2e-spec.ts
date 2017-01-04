import { MoviebroswerPage } from './app.po';

describe('moviebroswer App', function() {
  let page: MoviebroswerPage;

  beforeEach(() => {
    page = new MoviebroswerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
