import { CsvFileReader } from './CsvFileReader';
import { parseMatchRow } from './utils';
import { Summary } from './Summary';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { AverageGoalsAnalyzer } from './analyzers/AverageGoalsAnalyzer';
import { ConsoleReportGenerator } from './reportGenerators/ConsoleReportGenerator';

const reader = new CsvFileReader('football.csv', parseMatchRow);
reader.read();

// Example use
const summary = new Summary(
    new AverageGoalsAnalyzer('Man United'),
    new ConsoleReportGenerator()
);

summary.generate(reader.data);