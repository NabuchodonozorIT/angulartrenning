import {TestBed, inject} from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import {PilotService} from './pilot.service';
import {PilotValidators} from "./pilot-validators";
import {of} from 'rxjs';
import {Pilot} from './pilot';
import {fakeAsync, tick} from '@angular/core/testing';

class FakeHttp {
  get() {
  }

  post() {
  }

  put() {
  }
}

describe('Check the HttpClient', () => {
  let pilotService, httpService, pilot, spyPilot;

  beforeEach(() => {
    httpService = new FakeHttp();
    pilotService = new PilotService(httpService);
  });

  let expectedPilot;

  beforeEach(() => {
    const pilotAttrs = {firstName: 'Mike', lastName: 'Tomsky'};
    spyOn(httpService, 'get').and.returnValue(of(pilotAttrs));
    pilotService.getPilot(1).subscribe((pilot) => expectedPilot = pilot);
  });

  it('should make a request for pilot', () => {
    expect(httpService.get).toHaveBeenCalledWith('/api/pilots/1');
  });

  it("shouldn't make a request for pilot", () => {
    expect(httpService.get).not.toHaveBeenCalledWith('/api/killers/1');
  });

  it('should return pilot object', () => {
    expect(expectedPilot instanceof Pilot).toBeTruthy();
  });

  describe('when pilot is persisted', () => {
    beforeEach(() => {
      pilot = new Pilot({id: 1, fullName: 'Mike Tomsky'});
      spyOn(httpService, 'put').and.returnValue(of(new Pilot({id: 1, fullName: 'Mike Tomsky'})));
      pilotService.savePilot(pilot);
    });

    it('should make put request', () => {
      expect(httpService.put).toHaveBeenCalledWith('/api/pilots/1', pilot);
    });
  });

  describe('when pilot is not persisted', () => {
    beforeEach(() => {
      pilot = new Pilot({id: null, fullName: 'Mike Tomsky'});
      spyPilot = new Pilot({id: null, fullName: 'Spy SI'});
      spyOn(httpService, 'post').and.returnValue(of(new Pilot({id: 1, fullName: 'Mike Tomsky'})));
      pilotService.savePilot(pilot);
    });

    it('should make post request', () => {
      expect(httpService.post).toHaveBeenCalledWith('/api/pilots', pilot);
    });

    it("shouldn't make post request", () => {
      expect(httpService.post).not.toHaveBeenCalledWith('/api/pilots', spyPilot);
    });
  });


});


describe('PilotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotService]
    });
  });

  it('should be created', inject([PilotService], (service: PilotService) => {
    expect(service).toBeTruthy();
  }));
});

describe('when value is empty', () => {
  it('should return null', () => {
    const control = new FormControl('');
    expect(PilotValidators.pilotName(control)).toBeNull();
  });
});

describe('when starts from uppercase letter', () => {
  it('should return null', () => {
    const control = new FormControl('Adam');
    expect(PilotValidators.pilotName(control)).toBeNull();
  });
});

describe('when starts from lowcase letter', () => {
  it('should return validation object', () => {
    const control = new FormControl('adam');
    expect(PilotValidators.pilotName(control))
      .toEqual({pilotName: true});
  });
});

describe('Check methods', () => {
  let control, editedPilot, pilotService, expectedResult, validator;

  beforeEach(() => {
    control = new FormControl('Adam');
    editedPilot = new Pilot({id: 1, firstName: 'Adama'});
    pilotService = {
      getPilotByLastName: () => {
      }
    };
    validator = PilotValidators.pilotUniq(editedPilot, pilotService);
  });

  describe('when other pilot does not exist', () => {
    beforeEach(() => {
      spyOn(pilotService, 'getPilotByLastName').and.returnValue(of(null));
    });

    it('should return observable with null', fakeAsync(() => {
      validator(control).subscribe((result) => expectedResult = result);
      tick(500);
      expect(expectedResult).toBeNull();
    }));
  });

  describe('when pilot is same as edited', () => {
    beforeEach(() => {
      spyOn(pilotService, 'getPilotByLastName').and.returnValue(of(editedPilot));
    });

    it('should return observable with null', fakeAsync(() => {
      validator(control).subscribe((result) => expectedResult = result);
      tick(500);
      expect(expectedResult).toBeNull();
    }));
  });

  describe('when pilot is different then edited', () => {
    beforeEach(() => {
      spyOn(pilotService, 'getPilotByLastName').and.returnValue(of(new Pilot({id: 2, lastName: 'Adamek'})));
    });

    it('should return observable with validation object', fakeAsync(() => {
      validator(control).subscribe((result) => expectedResult = result);
      tick(500);
      expect(expectedResult).toEqual({pilotUniq: true});
    }));
  });

});
