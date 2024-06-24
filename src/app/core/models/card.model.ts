export interface MagicCard {
    arena_id: number;
    artist: string;
    artist_ids: string[]; // Assuming these are IDs, change type if necessary
    booster: boolean;
    border_color: string;
    card_back_id: string;
    cardmarket_id: number;
    cmc: number;
    collector_number: string;
    color_identity: string[]; // Array of colors like ['G', 'W']
    colors: string[]; // Array of colors like ['G', 'W']
    digital: boolean;
    edhrec_rank: number;
    finishes: string[]; // Assuming these are types like ['nonfoil', 'foil'], adjust if needed
    foil: boolean;
    frame: string;
    frame_effects: string[]; // Assuming these are effects like ['legendary'], adjust if needed
    full_art: boolean;
    games: string[]; // Assuming these are game types like ['arena', 'paper', 'mtgo']
    highres_image: boolean;
    id: string;
    illustration_id: string;
    image_status: string;
    image_uris: {
      small: string;
      normal: string;
      large: string;
      png: string;
      art_crop: string;
      // Add other sizes if necessary based on your needs
    };
    keywords: string[]; // Array of keywords if available
    lang: string;
    layout: string;
    legalities: {
      [format: string]: string; // Dynamic object where key is format name and value is legality status
    };
    mana_cost: string;
    mtgo_id: number;
    multiverse_ids: number[]; // Array of multiverse IDs
    name: string;
    nonfoil: boolean;
    object: string;
    oracle_id: string;
    oracle_text: string;
    oversized: boolean;
    power: string; // Typically string or number '*' for unknown or variable power/toughness
    preview?: {
      source: string;
      source_uri: string;
      previewed_at: string; // Date string if available
    };
    prices: {
      usd: string;
      usd_foil: string;
      usd_etched?: string | null; // Optional etched price
      eur: string;
      eur_foil: string;
      // Add other currencies if necessary
    };
    prints_search_uri: string;
    promo: boolean;
    purchase_uris: {
      tcgplayer: string;
      cardmarket: string;
      cardhoarder: string;
      // Add other purchase URIs if needed
    };
    rarity: string;
    related_uris: {
      gatherer: string;
      tcgplayer_infinite_articles: string;
      tcgplayer_infinite_decks: string;
      edhrec: string;
      // Add other related URIs if needed
    };
    released_at: string; // Date string
    reprint: boolean;
    reserved: boolean;
    rulings_uri: string;
    scryfall_set_uri: string;
    scryfall_uri: string;
    security_stamp: string;
    set: string;
    set_id: string;
    set_name: string;
    set_search_uri: string;
    set_type: string;
    set_uri: string;
    story_spotlight: boolean;
    tcgplayer_id: number;
    textless: boolean;
    toughness: string; // Typically string or number '*' for unknown or variable power/toughness
    type_line: string;
    uri: string;
    variation: boolean;
    // Add any other properties as needed
  }
  