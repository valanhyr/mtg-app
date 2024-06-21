import { Component, Input } from '@angular/core';
import { Tournament } from '../../../../models/tournament.model';
import { MOCK_TOURNAMENTS } from '../../../../../mocks/mock-tournaments';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrl: './rank.component.scss',
})

export class RankComponent {

  @Input() title: string = '';
  @Input() tournament!: Tournament;

  constructor(){ }
  totalPoints(points: number[]): number{
    let totalPoints: number = 0;
    points.forEach(element => {
      totalPoints+element
    });
    return totalPoints
  }
}
