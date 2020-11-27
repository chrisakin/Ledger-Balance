import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanbicComponent } from './stanbic.component';

describe('StanbicComponent', () => {
  let component: StanbicComponent;
  let fixture: ComponentFixture<StanbicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StanbicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StanbicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
