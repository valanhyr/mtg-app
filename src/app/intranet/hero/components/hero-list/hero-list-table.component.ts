import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../core/models/hero.model';
import { HeroService } from '../../../../core/services/hero.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-list-table.component.html',
  styleUrl: './hero-list-table.component.scss',
})
export class HeroListTableComponent implements OnInit {
  detailRoute = '/intranet/heroes/detail/';
  newHeroRoute = '/intranet/heroes/new/';
  heroes: Hero[] = [];
  displayedColumns: string[] = ['name', 'type', 'league', 'active', 'action'];
  dataSource: MatTableDataSource<Hero>;

  constructor(
    private _heroService: HeroService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.dataSource = new MatTableDataSource<Hero>(this.heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService.getAllHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
      this.dataSource.data = this.heroes;
      console.log(heroes);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    /*if (filterValue.length> 3){
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }*/
  }

  navigateToNewHero(){
    this.router.navigate([this.newHeroRoute]);
  }

  editHero(heroId: string): void {
    this.router.navigate([this.detailRoute + heroId]);
  }

  deleteHero(heroId: string) {
    const confirmDelete = window.confirm('?Estas seguro de eliminar el Heroe?');
    if (confirmDelete) {
      this._heroService.deleteHero(heroId).subscribe(
        (response) => {
          this.getHeroes();
          this.toastr.success(
            'El heroe se ha eliminado correctamente.',
            'Heroe eliminado'
          );
        },
        (error) => {
          this.toastr.error(
            'Se ha producido un error al intentar eliminar el heroe.',
            'Error!'
          );
        }
      );
    }
  }
}
