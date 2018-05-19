import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Pilot} from '../pilot';
import {map} from 'rxjs/operators';
import {PilotService} from '../pilot.service';
import {PilotValidators} from '../pilot-validators';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent {

  constructor(private pilotService: PilotService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }


  form$ = this.activatedRoute.data.pipe(
    map((data: { pilot: Pilot }) => data.pilot),
    map((pilot) => new FormGroup({
      id: new FormControl(pilot.id),
      firstName: new FormControl(pilot.firstName, {validators: [Validators.required]}),
      lastName: new FormControl(pilot.lastName, {validators: [Validators.required]}),
      imageUrl: new FormControl(pilot.imageUrl)
    }))
  )

  onSubmit(formValue) {
    const editedPilot = new Pilot(formValue);
    this.pilotService.savePilot(editedPilot)
      .subscribe(this.onSaveSuccess.bind(this), this.onSaveFailure.bind(this));
  }

  private onSaveSuccess() {
    this.router.navigate(['/']);
  }

  private onSaveFailure() {
    alert('Nie udało się zapisać pilota');
  }

}
