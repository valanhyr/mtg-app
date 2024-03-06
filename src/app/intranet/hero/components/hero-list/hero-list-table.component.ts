import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from '../../../../core/models/hero.model';
import { HeroService } from '../../../../core/services/hero.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-list-table.component.html',
  styleUrls: ['./hero-list-table.component.scss'],
})
export class HeroListTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'type', 'league', 'active', 'action'];
  dataSource = new MatTableDataSource<Hero>();
  detailRoute = '/intranet/heroes/detail/';
  newHeroRoute = '/intranet/heroes/new/';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _heroService: HeroService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getHeroes() {
    this._heroService.getAllHeroes().subscribe((heroes: Hero[]) => {
      this.dataSource.data = heroes;
      console.log(heroes);
      this.paginator.length = heroes.length;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToNewHero() {
    this.router.navigate([this.newHeroRoute]);
  }

  editHero(heroId: string): void {
    this.router.navigate([this.detailRoute + heroId]);
  }

  deleteHero(heroId: string) {
    const confirmDelete = window.confirm('¿Estas seguro de eliminar el Heroe?');
    if (confirmDelete) {
      this._heroService.deleteHero(heroId).subscribe({
        next: () => {
          this.getHeroes();
          this.toastr.success(
            'El heroe se ha eliminado correctamente.',
            'Heroe eliminado'
          );
        },
        error: () => {
          this.toastr.error(
            'Se ha producido un error al intentar eliminar el heroe.',
            'Error!'
          );
        }
      });
    } else {
      console.log('Deletion canceled by user');
    }
  }
}
