import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../../../../core/services/hero.service';
import { Hero } from '../../../../core/models/hero.model';
import { SharedModule } from '../../../../core/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let heroService: jasmine.SpyObj<HeroService>;
  let activatedRouteStub: any;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroById']);
    activatedRouteStub = {
      paramMap: of({
        get: (param: string) => '1'
      })
    };

    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: HeroService, useValue: heroServiceSpy }
      ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
      ]
    }).compileComponents();

    heroService = TestBed.inject(HeroService) as jasmine.SpyObj<HeroService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
