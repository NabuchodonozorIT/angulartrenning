import {IntelModule} from './intel.module';

describe('IntelModule', () => {
  let intelModule: IntelModule;

  beforeEach(() => {
    intelModule = new IntelModule();
  });

  it('should create an instance', () => {
    expect(intelModule).toBeTruthy();
  });
});
