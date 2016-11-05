import { CpsolutionsPage } from './app.po';

describe('cpsolutions App', function() {
  let page: CpsolutionsPage;

  beforeEach(() => {
    page = new CpsolutionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
