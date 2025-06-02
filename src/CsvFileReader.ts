import fs from 'fs';

export class CsvFileReader<T> {
    data: T[] = [];

    constructor(
        private filename: string,
        private parseRow: (row: string[]) => T
    ) {}

    read(): void {
        this.data = fs.readFileSync(this.filename, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string) => row.split(','))
            .map(this.parseRow);
    }
}