import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Deck, cardList } from '../../../../../core/models/deck.model';
import { MagicCard } from '../../../../../core/models/card.model';
import { CardSymbolsService } from '../../../../../core/scryfall/api/card-symbols.service';
import { CardsService } from '../../../../../core/scryfall/api/cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() deck?: Deck;
  @Input() showManaCost?: boolean =true;
  
  manaSymbols: { [key: string]: { url: string, description: string } } = {};
  
  cardForm: FormGroup;
  auxCards: MagicCard[] = [];

  constructor(
    private fb: FormBuilder,
    private cardSymbolsService: CardSymbolsService,
    private cardService: CardsService,
  ) {
    this.cardForm = this.fb.group({
      image: [''],
      userId: [this.getUserId(), Validators.required],
      creationDate: [new Date(), Validators.required],
      format: [''],
      cardList: this.fb.array([
        { cardId: '74943390-d25f-47cb-90bb-cbf70c87f4a2',
          quantity: 1,
          isCommander: false
        },
        {
          cardId: 'c0dad61f-36cd-46af-82b7-a02e04efd676',
          quantity: 1,
          isCommander: false
        }
      ]),
      favorite: [false],
      private: [false],
      active: [true],
    });
  }

  ngOnInit(): void {
    this.loadManaSymbols();
    this.initializeDeck();
    this.setAuxCards();
  }

  private initializeDeck(): void {
    if (this.deck) {
      this.cardForm.patchValue({
        image: this.deck.image,
        userId: this.deck.userId,
        creationDate: this.deck.creationDate,
        format: this.deck.format,
        cardlist: this.deck.cardList,
        favorite: this.deck.favorite,
        private: this.deck.private,
        active: this.deck.active,
      });

    }
  }

  private loadManaSymbols(): void {
    this.cardSymbolsService.getCardSymbols().subscribe(data => {
      data.data.forEach((symbol: { symbol: string; svg_uri: string; english: string; }) => {
        this.manaSymbols[symbol.symbol] = {
          url: symbol.svg_uri,
          description: symbol.english
        };
      });
    });
  }
  getCardQuantity(id: string): string {
    const list = this.cardForm.get('cardList') as FormArray;
    const card = list.value.find((e:cardList) => e.cardId === id);
    console.log('card list',list);
    console.log('card',card);
  
    return card ? card.quantity.toString() : '0';
  }
  
  setAuxCards(): void {
    this.auxCards = [];
    const list = this.cardForm.get('cardList') as FormArray;

    list.value.forEach((control: cardList) => {
      const cardId = control.cardId.toString();
      this.cardService.getCardById(cardId).subscribe(card => {
        this.auxCards.push(card);
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

  private getUserId(): string {
    return localStorage.getItem('userId') || '';
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      const formValue = this.cardForm.value;
      console.log('Form Submitted!', formValue);
      // Handle the form submission, e.g., add the card to the deck
    }
  }

  printForm(): void {
    console.log(this.cardForm);
  }
}
