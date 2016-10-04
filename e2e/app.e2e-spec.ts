import { TechdaysNg2Page } from './app.po';

describe('techdays-ng2 App', function() {
  let page: TechdaysNg2Page;

  beforeEach(() => {
    page = new TechdaysNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
