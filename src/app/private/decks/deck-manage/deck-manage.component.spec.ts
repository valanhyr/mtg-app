import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckManageComponent } from './deck-manage.component';

describe('DeckManageComponent', () => {
  let component: DeckManageComponent;
  let fixture: ComponentFixture<DeckManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeckManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeckManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
