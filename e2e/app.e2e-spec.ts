import { NewsPaperPage } from './app.po';

describe('news-paper App', () => {
  let page: NewsPaperPage;

  beforeEach(() => {
    page = new NewsPaperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
