import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearthCraftComponent } from './hearth-craft.component';

describe('HearthCraftComponent', () => {
  let component: HearthCraftComponent;
  let fixture: ComponentFixture<HearthCraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearthCraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearthCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
