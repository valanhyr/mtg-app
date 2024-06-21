import { Component } from '@angular/core';
import { Tournament } from '../../core/models/tournament.model';
import { MOCK_TOURNAMENTS } from '../../mocks/mock-tournaments';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.scss'
})


export class MainBoardComponent {
  carouselItems = [
    { type: 'image', url: 'https://images.squarespace-cdn.com/content/v1/57a56368ebbd1acee615722e/1519669921869-6AGIBO0QKHIVHV2AVQ8Q/mtg-commander-league.jpg?format=1500w' },
    { type: 'image', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PKrk3WphBhR9MKAqEcz17uxdKrM3LoV9aA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PKrk3WphBhR9MKAqEcz17uxdKrM3LoV9aA&s' },
    { type: 'image', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjE83r1TgU3-7Eb4l-Y3QsNpnMM79zYr7fXozgKsX1MnKv5KXFcG1AQ7ZJ-1_oR3bH4ZQ&usqp=CAU' },
    { type: 'image', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxlXnukdybvqVescc4QdnRuGu1Mo0fwbgNg&s' }
  ];
  imageBanner = "../../../assets/images/comingsoonbanner.gif";
  //imageBanner = "../../../assets/images/magicBanner.jpeg";
  //imageBanner = "../../../assets/videos/comingsoonbanner.mp4";

  tournaments: Tournament[] = MOCK_TOURNAMENTS; 
}
