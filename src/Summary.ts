import { MatchData } from './utils';

export interface MatchesAnalyzer {
    run(matches: MatchData[]): string;
}

export interface ReportGenerator {
    run(report: string): void;
}

export class Summary {
    constructor(
        private analyzer: MatchesAnalyzer,
        private reportGenerator: ReportGenerator
    ) {}
}