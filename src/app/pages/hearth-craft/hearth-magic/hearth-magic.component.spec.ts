import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearthMagicComponent } from './hearth-magic.component';

describe('HearthMagicComponent', () => {
  let component: HearthMagicComponent;
  let fixture: ComponentFixture<HearthMagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearthMagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearthMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
