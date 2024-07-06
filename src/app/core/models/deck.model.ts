export interface Deck {
  id: string;
  image: string;
  userId: string;
  creationDate: Date;
  format: DeckType;
  cardList: cardList[];
  favorite: boolean;
  private: boolean
  active: boolean;
}
enum DeckType {
  COMMANDER,
  BRAWL,
  CONSTRUCTED,
  STANDARD,
  PIONER,
  MODERN,
  LEGACY,
  VINTAGE,
  PAUPER,
  CASUAL,
  LIMITED,
  BOOSTER_DRAFT,
  SEALED,
  EXPLORER,
  HISTORIC,
  TWO_HEADED_GIANT,
}
interface cardList{
    cardId: string;
    quantity: number;
    isCommander: boolean;
}