import { NGTruongKhoaPage } from './app.po';

describe('ngtruong-khoa App', () => {
  let page: NGTruongKhoaPage;

  beforeEach(() => {
    page = new NGTruongKhoaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
