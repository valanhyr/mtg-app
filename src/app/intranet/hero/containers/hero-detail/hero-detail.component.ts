import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../../core/services/hero.service';
import { Hero } from '../../../../core/models/hero.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent implements OnInit {
  existingHeroData: Hero | null = null; 
  heroId: string = "";

  constructor(
    private route: ActivatedRoute,
    private _heroService: HeroService
  ) {
    this.route.paramMap.subscribe(params => {
      this.heroId = params.get('id')!;
      console.log("id "+ this.heroId)
      this.getHero(this.heroId);
    });
  }

  ngOnInit(): void {

  }

  getHero(heroId: string): void {
    this._heroService.getHeroById(heroId).subscribe(
      hero => {
        this.existingHeroData = hero;
      }
    );
  }
}
