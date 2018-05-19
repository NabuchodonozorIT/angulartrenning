import { element, by, browser } from 'protractor';

export class HangarPage {
  nagivateTo() {
    const url = '/hangar';
    browser.get(url).catch(() =>
      browser.switchTo().alert().then((alert) => {
        alert.sendKeys('IS Tester');
        alert.accept();
        browser.get(url);
      })
    );
  }

  setShipQuantity(number:number) {
    const input = element(by.name('shipCount'));
    return input.clear().then(() => input.sendKeys(number));
  }

  setFighterType() {
    return element.all(by.css(`[name="shipType"]`)).first().click();
  }

  submitProduceForm() {
    return element(by.buttonText('Create')).click();
  }

  getShipsCount() {
    return element.all(by.css('app-space-ship')).count();
  }
}

