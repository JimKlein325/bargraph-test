import { BargraphDemoPage } from './app.po';

describe('bargraph-demo App', function() {
  let page: BargraphDemoPage;

  beforeEach(() => {
    page = new BargraphDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
