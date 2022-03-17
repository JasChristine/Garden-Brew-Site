import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMoonsComponent } from './year-moons.component';

describe('YearMoonsComponent', () => {
  let component: YearMoonsComponent;
  let fixture: ComponentFixture<YearMoonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearMoonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearMoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
