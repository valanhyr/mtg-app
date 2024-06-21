import { Component, Input } from '@angular/core';
import { Tournament } from '../../../../models/tournament.model';
import { ResponsiveService } from '../../../../services/utils/responsive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tournaments-info',
  templateUrl: './tournaments-info.component.html',
  styleUrl: './tournaments-info.component.scss'
})
export class TournamentsInfoComponent {
  @Input() title: string = '';
  @Input() tournaments: Tournament[] = [];
  visibleTournaments: Tournament[] = [];
  screenWidthSubscription: Subscription;
  
  constructor(private responsiveService: ResponsiveService) {
    this.screenWidthSubscription = this.responsiveService.getScreenWidth().subscribe(width => {
      this.updateVisibleTournaments(width);
    });
  }

  ngOnInit(): void {
    const initialWidth = window.innerWidth;
    this.updateVisibleTournaments(initialWidth);
  }

  ngOnDestroy(): void {
    if (this.screenWidthSubscription) {
      this.screenWidthSubscription.unsubscribe();
    }
  }

  updateVisibleTournaments(screenWidth: number): void {
    if (screenWidth >= 992) {
      this.visibleTournaments = this.tournaments.slice(0, this.tournaments.length);
    } else if (screenWidth >= 600) {
      this.visibleTournaments = this.tournaments.slice(0, 2);
    } else {
      this.visibleTournaments = this.tournaments.slice(0, 1);
    }
  }
}