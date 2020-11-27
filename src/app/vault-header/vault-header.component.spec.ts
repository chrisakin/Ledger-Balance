import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultHeaderComponent } from './vault-header.component';

describe('VaultHeaderComponent', () => {
  let component: VaultHeaderComponent;
  let fixture: ComponentFixture<VaultHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaultHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
