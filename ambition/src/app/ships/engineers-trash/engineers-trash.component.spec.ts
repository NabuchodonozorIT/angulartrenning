import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EngineersTrashComponent} from './engineers-trash.component';

describe('EngineersTrashComponent', () => {
  let component: EngineersTrashComponent;
  let fixture: ComponentFixture<EngineersTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EngineersTrashComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineersTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
