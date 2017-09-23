import { browser, by, element } from 'protractor';
import 'tslib';

describe('App', () => {

  beforeEach(async () => {
    await browser.get('/');
  });

  it('should have a title', async () => {
    let subject: string = await browser.getTitle();
    let result: string  = 'Angular2 Webpack Starter by @gdi2290 from @AngularClass';
    expect(subject).toEqual(result);
  });

  it('should have header', async () => {
    let subject: boolean = await element(by.css('h1')).isPresent();
    let result: boolean  = true;
    expect(subject).toEqual(result);
  });

  it('should have <home>', async () => {
    let subject: boolean = await element(by.css('app home')).isPresent();
    let result: boolean  = true;
    expect(subject).toEqual(result);
  });

  it('should have buttons', async () => {
    let subject: string = await element(by.css('button')).getText();
    let result: string  = 'Submit Value';
    expect(subject).toEqual(result);
  });

});
