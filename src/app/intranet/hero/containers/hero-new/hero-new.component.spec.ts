import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroNewComponent } from './hero-new.component';
import { SharedModule } from '../../../../core/shared/shared.module';
import { HeroFormComponent } from '../../components/hero-form/hero-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroNewComponent', () => {
  let component: HeroNewComponent;
  let fixture: ComponentFixture<HeroNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroNewComponent, HeroFormComponent ],
      imports: [SharedModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
