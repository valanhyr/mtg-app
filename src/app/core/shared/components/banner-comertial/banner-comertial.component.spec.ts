import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComertialComponent } from './banner-comertial.component';

describe('BannerComertialComponent', () => {
  let component: BannerComertialComponent;
  let fixture: ComponentFixture<BannerComertialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComertialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerComertialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
