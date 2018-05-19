import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { of, throwError } from 'rxjs';
import { PilotRoomComponent } from './pilot-room.component';
import { PilotService } from '../pilot.service';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot',
  template: 'pilot: {{pilot.fullName}} <ng-content></ng-content>'
})
class FakePilotComponent {
  @Input() pilot;
}

fdescribe('PilotRoomComponent', () => {
  let component:PilotRoomComponent;
  let fixture:ComponentFixture<PilotRoomComponent>;
  let pilotService:PilotService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          PilotRoomComponent,
          FakePilotComponent
        ],
        providers: [
          {
            provide: PilotService, useValue: {
            getPilots: () => {
            }
          }
          }
        ]
      }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotRoomComponent);
    component = fixture.componentInstance;
    pilotService = TestBed.get(PilotService);
  });

  describe('is successfully', () => {
    let pilot:Pilot;

    beforeEach(() => {
      pilot = new Pilot({fullName: 'Mike Tomsky'});
      spyOn(pilotService, 'getPilots').and.returnValue(of([pilot]));
      fixture.detectChanges();
    });

    it('should display pilots', () => {
      expect(fixture.debugElement.nativeElement.textContent).toContain('Mike')
    });

    describe('selected pilot', () => {
      beforeEach(() => {
        spyOn(component.pilotSelected, 'emit');
        fixture.debugElement.query(By.css('._QASelect')).triggerEventHandler('click', null);
        fixture.detectChanges();
      });

      it('should store selected pilot', () => {
        expect(component.selectedPilot).toBe(pilot);
      });

      it('should emit pilot', () => {
        expect(component.pilotSelected.emit).toHaveBeenCalledWith(pilot);
      });

      describe('deselected pilot', () => {
        beforeEach(() => {
          fixture.debugElement.query(By.css('._QAdeselect')).triggerEventHandler('click', null);
          fixture.detectChanges();
        });

        it('should clear selection', () => {
          expect(component.selectedPilot).toBeNull();
        });

        it('should emit null', () => {
          expect(component.pilotSelected.emit).toHaveBeenCalledWith(null);
        });
      });
    });

  });
});

