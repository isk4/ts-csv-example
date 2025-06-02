import { CsvFileReader } from "./CsvFileReader";

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}
type MatchData = [Date, string, string, number, number, MatchResult, string];
const parseMatchRow = (row: string[]): MatchData => {
    return [
        new Date(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
    ];
};

const reader = new CsvFileReader('football.csv', parseMatchRow);
reader.read();

console.log(reader.data);