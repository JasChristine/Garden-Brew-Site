import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasseomancyComponent } from './tasseomancy.component';

describe('TasseomancyComponent', () => {
  let component: TasseomancyComponent;
  let fixture: ComponentFixture<TasseomancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasseomancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasseomancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
