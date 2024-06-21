import { Tournament } from '../core/models/tournament.model';

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: '1',
    name: 'Commander 50€',
    image: '',
    description: 'A high-stakes Commander tournament with a 50€ prize pool.',
    rules: [
      {
        id: '1',
        title: 'Rule 1',
        explanation: 'Explanation of rule 1'
      },
      {
        id: '2',
        title: 'Rule 2',
        explanation: 'Explanation of rule 2'
      },
      {
        id: '3',
        title: 'Rule 3',
        explanation: 'Explanation of rule 3'
      }
    ],
    startDate: new Date('2024-01-03'),
    endDate: null,
    minPlayers: 3,
    maxPlayers: 5,
    rounds: 4,
    currentRound: 2,
    players: [
      '001',
      '002',
      '003'
    ],
    rank: [
      {
        userId: '001',
        deckId: '0011',
        results: [3, 1, 2]
      },
      {
        userId: '002',
        deckId: '0012',
        results: [2, 3, 3]
      },
      {
        userId: '003',
        deckId: '0013',
        results: [1, 2, 1]
      }
    ]
  },
  {
    id: '2',
    name: 'Modern Showdown',
    image: '',
    description: 'A competitive Modern format tournament.',
    rules: [
      {
        id: '1',
        title: 'Rule A',
        explanation: 'Explanation of rule A'
      },
      {
        id: '2',
        title: 'Rule B',
        explanation: 'Explanation of rule B'
      }
    ],
    startDate: new Date('2024-02-10'),
    endDate: new Date('2024-02-11'),
    minPlayers: 4,
    maxPlayers: 8,
    rounds: 5,
    currentRound: 1,
    players: [
      '101',
      '102',
      '103',
      '104'
    ],
    rank: [
      {
        userId: '101',
        deckId: '0021',
        results: [3, 2, 1]
      },
      {
        userId: '102',
        deckId: '0022',
        results: [2, 1, 3]
      },
      {
        userId: '103',
        deckId: '0023',
        results: [1, 3, 2]
      },
      {
        userId: '104',
        deckId: '0024',
        results: [2, 2, 2]
      }
    ]
  },
  {
    id: '3',
    name: 'Legacy Legends',
    image: '',
    description: 'An epic Legacy format tournament.',
    rules: [
      {
        id: '1',
        title: 'Rule X',
        explanation: 'Explanation of rule X'
      },
      {
        id: '2',
        title: 'Rule Y',
        explanation: 'Explanation of rule Y'
      },
      {
        id: '3',
        title: 'Rule Z',
        explanation: 'Explanation of rule Z'
      }
    ],
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-03-16'),
    minPlayers: 5,
    maxPlayers: 10,
    rounds: 6,
    currentRound: 0,
    players: [
      '201',
      '202',
      '203',
      '204',
      '205'
    ],
    rank: [
      {
        userId: '201',
        deckId: '0031',
        results: [1, 1, 1]
      },
      {
        userId: '202',
        deckId: '0032',
        results: [2, 2, 2]
      },
      {
        userId: '203',
        deckId: '0033',
        results: [3, 3, 3]
      },
      {
        userId: '204',
        deckId: '0034',
        results: [4, 4, 4]
      },
      {
        userId: '205',
        deckId: '0035',
        results: [5, 5, 5]
      }
    ]
  }
];
