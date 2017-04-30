import { RogrPage } from './app.po';

describe('rogr App', function() {
  let page: RogrPage;

  beforeEach(() => {
    page = new RogrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
