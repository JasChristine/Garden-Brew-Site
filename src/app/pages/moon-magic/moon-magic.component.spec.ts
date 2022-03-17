import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonMagicComponent } from './moon-magic.component';

describe('MoonMagicComponent', () => {
  let component: MoonMagicComponent;
  let fixture: ComponentFixture<MoonMagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonMagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
