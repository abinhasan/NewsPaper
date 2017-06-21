import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVideoComponent } from './all-video.component';

describe('AllVideoComponent', () => {
  let component: AllVideoComponent;
  let fixture: ComponentFixture<AllVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
