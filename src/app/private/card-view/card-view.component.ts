import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../../core/scryfall/api/cards.service';
import { MagicCard } from '../../core/models/card.model';
import { CardSymbolsService } from '../../core/scryfall/api/card-symbols.service';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})

export class CardViewComponent implements OnInit {
  card!: MagicCard;
  manaSymbols: { [key: string]: { url: string, description: string } } = {};
  constructor(
    private route: ActivatedRoute,
    private cardService: CardsService,
    private cardSymbolsService: CardSymbolsService
  ) { }

  ngOnInit(): void {
    this.getSymbols();
    this.checkCardId();
  }
  getSymbols():void {
    this.cardSymbolsService.getCardSymbols().subscribe(data => {
      data.data.forEach((symbol: { symbol: string | number; svg_uri: any; english: any; }) => {
        this.manaSymbols[symbol.symbol] = {
          url: symbol.svg_uri,
          description: symbol.english
        };
      });
    });
  }
  getManaCostSymbols(manaCost: string): { url: string, description: string }[] {
    const symbolRegex = /{([^}]+)}/g;
    const symbols = [];
    let match;
    while ((match = symbolRegex.exec(manaCost)) !== null) {
      const symbol = `{${match[1]}}`;
      if (this.manaSymbols[symbol]) {
        symbols.push(this.manaSymbols[symbol]);
      }
    }
    return symbols;
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
        console.log(this.card);
      },
      error => {
        console.error('Error fetching card:', error);
        // Handle error as needed (e.g., show error message)
      }
    );
  }
  getLines(): string[] {
    return this.card.oracle_text.split('\n');
  }
}

