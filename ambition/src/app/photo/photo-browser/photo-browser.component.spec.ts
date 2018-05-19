import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBrowserComponent } from './photo-browser.component';

describe('PhotoBrowserComponent', () => {
  let component: PhotoBrowserComponent;
  let fixture: ComponentFixture<PhotoBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
