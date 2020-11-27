import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TillAccountComponent } from './till-account.component';

describe('TillAccountComponent', () => {
  let component: TillAccountComponent;
  let fixture: ComponentFixture<TillAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TillAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TillAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
