import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { Hero } from '../../../../core/models/hero.model';
import { HeroService } from '../../../../core/services/hero.service';
import { HeroFormComponent } from './hero-form.component';
import { SharedModule } from '../../../../core/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;
  let heroService: jasmine.SpyObj<HeroService>;
  let toastrService: jasmine.SpyObj<ToastrService>;

  beforeEach(async () => {
    const heroServiceSpy = jasmine.createSpyObj('HeroService', [
      'createHero',
      'updateHero',
    ]);
    const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['success', 'error']);

    await TestBed.configureTestingModule({
      declarations: [HeroFormComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        { provide: HeroService, useValue: heroServiceSpy },
        { provide: ToastrService, useValue: toastrServiceSpy }
      ],
    }).compileComponents();

    heroService = TestBed.inject(HeroService) as jasmine.SpyObj<HeroService>;
    toastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize hero form with default values', () => {
    expect(component.heroForm.value).toEqual({
      _id: null,
      name: '',
      type: '',
      league: '',
      active: true,
    });
  });

  it('should set initial hero values if provided', () => {
    const initialData: Hero = {
      _id: '1',
      name: 'Superman',
      type: 'Superhero',
      league: 'Justice League',
      active: true
    };
  
    component.initialData = initialData;
    component.ngOnInit();
  
    const expectedName = initialData.name.toLowerCase();
    const actualName = component.heroForm.value.name.toLowerCase();
  
    expect(actualName).toEqual(expectedName);
  });
  

  it('should call createHero method of hero service when form is submitted in add mode', () => {
    const formData: Hero = {
      _id: '1',
      name: 'Superman',
      type: 'Superhero',
      league: 'Justice League',
      active: true,
    };
    component.mode = 'add';
    component.heroForm.setValue(formData);
    heroService.createHero.and.returnValue(of(formData));
    component.submitForm();
    expect(heroService.createHero).toHaveBeenCalledWith(formData);
  });

  it('should call updateHero method of hero service when form is submitted in edit mode', () => {
    const formData: Hero = {
      _id: '1',
      name: 'Superman',
      type: 'Superhero',
      league: 'Justice League',
      active: true,
    };
    component.mode = 'edit';
    component.heroForm.setValue(formData);
    heroService.updateHero.and.returnValue(of(formData));
    component.submitForm();
    expect(heroService.updateHero).toHaveBeenCalledWith(formData);
  });
});
