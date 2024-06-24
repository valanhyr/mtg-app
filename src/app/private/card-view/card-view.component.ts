import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../../core/scryfall/cards.service';
import { MagicCard } from '../../core/models/card.model';
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  card!: MagicCard;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardsService
  ) { }

  ngOnInit(): void {
    this.checkCardId();
  }

  checkCardId(): void {
    this.route.params.subscribe(params => {
      const cardId = params['id'];
      if (cardId) {
        this.getCardById(cardId);
      }
    });
  }

  getCardById(cardId: string): void {
    this.cardService.getCardById(cardId).subscribe(
      card => {
        this.card = card;
      },
      error => {
        console.error('Error fetching card:', error);
        // Handle error as needed (e.g., show error message)
      }
    );
  }
}

