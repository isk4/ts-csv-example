import { CsvFileReader } from './CsvFileReader';
import { MatchResult, MatchData, parseMatchRow } from './utils';

const reader = new CsvFileReader('football.csv', parseMatchRow);
reader.read();

console.log(reader.data);