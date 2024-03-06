/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroListTableComponent } from './hero-list-table.component';
import { HeroService } from '../../../../core/services/hero.service';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { Hero } from '../../../../core/models/hero.model';
import { SharedModule } from '../../../../core/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroListTableComponent', () => {
  let component: HeroListTableComponent;
  let fixture: ComponentFixture<HeroListTableComponent>;
  let heroService: jasmine.SpyObj<HeroService>;
  let toastrService: jasmine.SpyObj<ToastrService>;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj('HeroService', ['getAllHeroes', 'deleteHero']);
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);

    await TestBed.configureTestingModule({
      declarations: [HeroListTableComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule
    ],
      providers: [
        { provide: HeroService, useValue: heroServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy }
      ]
    }).compileComponents();

    heroService = TestBed.inject(HeroService) as jasmine.SpyObj<HeroService>;
    toastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve heroes on initialization', () => {
    const mockHeroes: Hero[] = [
      { _id: '1', name: 'Superman', type: 'Superhero', league: 'Justice League', active: true },
      { _id: '2', name: 'Batman', type: 'Superhero', league: 'Justice League', active: true }
    ];

    heroService.getAllHeroes.and.returnValue(of(mockHeroes));

    component.ngOnInit();

    expect(heroService.getAllHeroes).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockHeroes);
  });

  it('should delete hero when confirmed', () => {
    const mockHeroId = '1';
    const confirmSpy = spyOn(window, 'confirm').and.returnValue(true);
    const deleteHeroSpy = spyOn(heroService, 'deleteHero').and.returnValue(of(undefined));
  
    component.deleteHero(mockHeroId);
  
    expect(confirmSpy).toHaveBeenCalled();
    expect(deleteHeroSpy).toHaveBeenCalledWith(mockHeroId);
    expect(component.getHeroes).toHaveBeenCalled();
    expect(toastrService.success).toHaveBeenCalled();
  });
  

  it('should not delete hero when not confirmed', () => {
    const mockHeroId = '1';
    const confirmSpy = spyOn(window, 'confirm').and.returnValue(false);

    component.deleteHero(mockHeroId);

    expect(confirmSpy).toHaveBeenCalled();
    expect(heroService.deleteHero).not.toHaveBeenCalled();
    expect(component.getHeroes).not.toHaveBeenCalled();
    expect(toastrService.success).not.toHaveBeenCalled();
    expect(toastrService.error).not.toHaveBeenCalled();
  });
});*/
