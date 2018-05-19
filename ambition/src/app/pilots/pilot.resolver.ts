import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Pilot} from './pilot';
import {PilotService} from './pilot.service';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotResolver implements Resolve<Pilot> {
  constructor(private pilotService: PilotService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return route.params.id ? this.pilotService.getPilot(route.params.id) : of(new Pilot());
  }

}
