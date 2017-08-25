import { NgxC3DemoPage } from './app.po';

describe('ngx-c3-demo App', function() {
  let page: NgxC3DemoPage;

  beforeEach(() => {
    page = new NgxC3DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
