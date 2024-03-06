import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../../../../core/models/hero.model';
import { HeroService } from '../../../../core/services/hero.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss',
})
export class HeroFormComponent implements OnInit {
  @Input() initialData: any; // Initial data for the form fields
  @Input() mode: 'add' | 'edit' = 'add'; // Mode of the form, default is 'add'
  @Output() submitFormEvent = new EventEmitter<any>();

  heroForm: FormGroup;

  constructor(
    private _heroService: HeroService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.heroForm = this.fb.group({
      _id: [null],
      name: ['', Validators.required],
      type: ['', Validators.required],
      league: ['', Validators.required],
      active: [true],
    });
  }

  ngOnInit(): void {
    this.setInitialHeroValues();
  }

  setInitialHeroValues(): void {
    if (this.initialData) {
      this.heroForm.patchValue({
        _id: this.initialData._id,
        name: this.initialData.name,
        type: this.initialData.type,
        league: this.initialData.league,
        active: this.initialData.active,
      });
    }
  }

  submitForm(): void {
    const formData = this.heroForm.value;

    if (this.mode === 'add') {
      this.createHero(formData);
    } else if (this.mode === 'edit') {
      this.editHero(formData);
    }
  }
  navigateToList(): void{
    this.router.navigate(['/intranet/heroes/list'])
  }
  createHero(formData: Hero): void {
    this._heroService.createHero(formData).subscribe(
      (response) => {
        this.toastr.success(
          'El heroe ha sido creado correctamente.',
          'Heroe creado'
        );
        this.navigateToList();
      },
      (error) => {
        this.toastr.error(
          'Se ha producido un error al intentar crear el heroe.',
          'Error!'
        );
      }
    );
  }

  editHero(formData: any): void {
    this._heroService.updateHero(formData).subscribe(
      (response) => {
        this.toastr.success(
          'El heroe ha sido actualizado correctamente.',
          'Heroe actualizado'
        );
        this.navigateToList();
      },
      (error) => {
        this.toastr.error(
          'Se ha producido un error al intentar actualizar el heroe.',
          'Error!'
        );
      }
    );
  }
}
