import { Component } from '@angular/core';
import { CardsService } from '../../core/scryfall/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  //cards: any[] = [];
  groupedCards: { [key: string]: any[] } = {};
  nameList: string = '';
  card: any;
  name: string = '';

  constructor(private cardService: CardsService) {}

  searchCards() {
    this.cardService.getCardByName(this.name).subscribe(
      (data) => {
        this.card = data;
        console.log(this.card);
      },
      (error) => {
        console.error('Error fetching cards:', error);
      }
    );
  }

  searchCardsByNames() {
    const names = this.nameList.split('\n').map(name => name.trim()).filter(name => name);

    const cards:any = []; // Temporary array to hold all cards before grouping and sorting
    let completedRequests = 0; // Counter to track completed requests

    names.forEach(name => {
      this.cardService.getCardByName(name).subscribe(
        (data) => {
          if (data) {
            cards.push(data); // Assuming the response is a single card
          }
          completedRequests++;
          if (completedRequests === names.length) {
            this.groupAndSortCards(cards);
          }
        },
        (error) => {
          console.error('Error fetching card:', error);
          completedRequests++;
          if (completedRequests === names.length) {
            this.groupAndSortCards(cards);
          }
        }
      );
    });
  }

  private groupAndSortCards(cards: any[]) {
    // Group cards by type_line with all creatures under "Creature"
    this.groupedCards = cards.reduce((groups, card) => {
      let typeLine = card.type_line || 'Unknown';
      if (typeLine.toLowerCase().includes('creature')) {
        typeLine = 'Creature';
      }
      if (!groups[typeLine]) {
        groups[typeLine] = [];
      }
      groups[typeLine].push(card);
      return groups;
    }, {});

    // Sort cards within each group by name
    Object.keys(this.groupedCards).forEach(typeLine => {
      this.groupedCards[typeLine].sort((a, b) => a.name.localeCompare(b.name));
    });

    console.log(this.groupedCards);
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
