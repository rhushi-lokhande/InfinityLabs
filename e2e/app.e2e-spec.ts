import { InfinityLabsPage } from './app.po';

describe('infinity-labs App', () => {
  let page: InfinityLabsPage;

  beforeEach(() => {
    page = new InfinityLabsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
