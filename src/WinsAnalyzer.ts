import { MatchesAnalyzer } from './Summary';
import { MatchData, MatchResult } from './utils';

export class WinsAnalyzer implements MatchesAnalyzer {
    constructor(private teamName: string) {}

    run(matches: MatchData[]): string {
        let wins = 0;

        matches.forEach((match: MatchData) => {
            if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
                wins++;
            } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
                wins++;
            }
        });
        return `The team ${this.teamName} won ${wins} times.`;
    }
}