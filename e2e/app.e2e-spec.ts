import { AfauthPage } from './app.po';

describe('afauth App', () => {
  let page: AfauthPage;

  beforeEach(() => {
    page = new AfauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
