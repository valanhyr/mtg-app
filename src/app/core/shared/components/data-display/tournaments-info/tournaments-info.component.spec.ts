import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsInfoComponent } from './tournaments-info.component';

describe('TournamentsInfoComponent', () => {
  let component: TournamentsInfoComponent;
  let fixture: ComponentFixture<TournamentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TournamentsInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
