import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import { Hero } from '../models/hero.model';
import { SharedModule } from '../shared/shared.module';
import { environment } from '../../../../src/environments/environment';

describe('HeroService', () => {
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      providers: [HeroService],
    });
    service = TestBed.inject(HeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve heroes from the API', () => {
    const mockHeroes: Hero[] = [
      {
        _id: '65e43c595ec55a37152d5b4b',
        name: 'superman',
        league: 'A',
        type: 'Fuerza',
        active: true,
      },
      {
        _id: '65e43c7c5ec55a37152d5b4c',
        name: 'spiderman',
        league: 'A',
        type: 'Agilidad',
        active: true,
      },
    ];

    service.getAllHeroes().subscribe((heroes) => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(mockHeroes);
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/heroes`);
    expect(req.request.method).toBe('GET');
    req.flush(mockHeroes);
  });

  it('should retrieve a hero by ID from the API', () => {
    const mockHero: Hero = {
      _id: '1',
      name: 'Hero 1',
      league: 'A',
      type: 'Fuerza',
      active: true,
    };

    service.getHeroById('1').subscribe((hero) => {
      expect(hero).toEqual(mockHero);
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/heroes/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockHero);
  });

  it('should create a new hero via the API', () => {
    const newHero: Hero = {
      name: 'New Hero',
      league: 'A',
      type: 'Fuerza',
      active: true,
    };
    const createdHero: Hero = { ...newHero, _id: '3' };

    service.createHero(newHero).subscribe((hero) => {
      expect(hero.name).toBe('New Hero');
      expect(hero._id).toBeDefined();
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/heroes`);
    expect(req.request.method).toBe('POST');
    req.flush(createdHero);
  });

  it('should update an existing hero via the API', () => {
    const updatedHero: Hero = {
      _id: '1',
      name: 'Updated Hero',
      league: 'A',
      type: 'Fuerza',
      active: true,
    };

    service.updateHero(updatedHero).subscribe((hero) => {
      expect(hero).toEqual(updatedHero);
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/heroes/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedHero);
  });

  it('should delete a hero via the API', () => {
    service.deleteHero('1').subscribe(() => {
      // Do nothing for now
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/heroes/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
