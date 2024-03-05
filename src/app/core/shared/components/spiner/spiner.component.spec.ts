import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinerComponent } from './spiner.component';
import { SharedModule } from '../../shared.module';

describe('SpinerComponent', () => {
  let component: SpinerComponent;
  let fixture: ComponentFixture<SpinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinerComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
