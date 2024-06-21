import { Rank } from "./rank.model";
import { Rule } from "./rule.model";

export interface Tournament {
    id?: string;
    name: string;
    image?: string;
    description: string;
    rules: Rule[];
    startDate: Date;
    endDate: Date | null;
    minPlayers: number;
    maxPlayers: number;
    rounds: number;
    currentRound: number;
    players: string[];
    rank: Rank[]

}