import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCraftComponent } from './green-craft.component';

describe('GreenCraftComponent', () => {
  let component: GreenCraftComponent;
  let fixture: ComponentFixture<GreenCraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenCraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
