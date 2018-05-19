import {FormControl} from '@angular/forms';
import {timer} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import {Pilot} from './pilot';
import {PilotService} from './pilot.service';

export class PilotValidators {
  static pilotName(formControl: FormControl) {
    return !formControl.value || /^[A-Z]/.test(formControl.value) ? null : {pilotName: true};
  }

  static pilotUniq(pilot: Pilot, pilotService: PilotService) {
    return (formControl: FormControl) => {
      return timer(500).pipe(
        switchMap(() => pilotService.getPilotByLastName(formControl.value)),
        map((fetchedPilot: Pilot) => (fetchedPilot && fetchedPilot.id !== pilot.id) ? {pilotUniq: true} : null)
      );
    }
  }
}
