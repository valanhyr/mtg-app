import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../../../../core/models/hero.model';
import { UppercasePipe } from '../../../../core/shared/pipes/uppercase.pipe';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss',
})
export class HeroFormComponent implements OnInit {
  heroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      league: ['', Validators.required],
      active: [true]
    });
  }

  ngOnInit(): void {}

  saveHero(): void {
    if (this.heroForm.valid) {
      const heroData: Hero = this.heroForm.value;
      console.log(heroData)
    } else {
      
    }
  }

}
