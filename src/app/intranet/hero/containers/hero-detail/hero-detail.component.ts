import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from '../../../../core/services/hero.service';
import { Hero } from '../../../../core/models/hero.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  heroForm: FormGroup;
  
  constructor(
    private _heroService: HeroService,
    private formBuilder: FormBuilder
    ) {
      this.heroForm = this.formBuilder.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        league: ['', Validators.required],
        active: [false],
      });
    }

  ngOnInit(): void {
    this.getHero
  }
  getHero(){
    this._heroService.getHeroById('').subscribe(
      hero => this.patchFormvalues(hero)
    );
  }
  patchFormvalues(hero:Hero){
    this.heroForm.patchValue({
      name: hero.name,
      type: hero.type,
      league: hero.league,
      active: hero.active,
    });
  }
}
