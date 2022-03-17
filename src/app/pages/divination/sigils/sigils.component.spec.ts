import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigilsComponent } from './sigils.component';

describe('SigilsComponent', () => {
  let component: SigilsComponent;
  let fixture: ComponentFixture<SigilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
