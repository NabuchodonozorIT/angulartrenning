import { HangarPage } from './hangar.po';

describe('Hangar page', () => {
  let page: HangarPage;

  beforeEach(() => {
    page = new HangarPage();
    page.nagivateTo();
  });

  describe('when performed ship production', () => {
    beforeEach(() => {
      page.setShipQuantity(1);
      page.setFighterType();
      page.submitProduceForm();
    });

    it('should render produced ship', () => {
      expect(page.getShipsCount()).toEqual(1);
    });

    describe('when performed ship another production', () => {
      beforeEach(() => {
        page.setShipQuantity(2);
        page.setFighterType();
        page.submitProduceForm();
      });

      it('should render produced ship', () => {
        expect(page.getShipsCount()).toEqual(3);
      });
    });

  });


});
