import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVideoComponent } from './details-video.component';

describe('DetailsVideoComponent', () => {
  let component: DetailsVideoComponent;
  let fixture: ComponentFixture<DetailsVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
