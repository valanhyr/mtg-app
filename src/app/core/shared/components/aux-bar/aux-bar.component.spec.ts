import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxBarComponent } from './aux-bar.component';

describe('AuxBarComponent', () => {
  let component: AuxBarComponent;
  let fixture: ComponentFixture<AuxBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuxBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuxBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
