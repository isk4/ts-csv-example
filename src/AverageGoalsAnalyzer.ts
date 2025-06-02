import { MatchesAnalyzer } from './Summary';
import { MatchData } from './utils';

export class AverageGoalsAnalyzer implements MatchesAnalyzer {
    constructor(private teamName: string) {}

    run(matches: MatchData[]): string {
        let matchCount = 0;
        let goalCount = 0;

        matches.forEach((match: MatchData) => {
            if (match[1] === this.teamName) {
                goalCount += match[3];
            } else if (match[2] === this.teamName) {
                goalCount += match[4];
            }
            matchCount++;
        });
        return `The team ${this.teamName} scored on average ${goalCount/matchCount} goals per game.`;
    }
}