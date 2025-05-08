import * as fs from 'fs';

export class CSVExporter {
    private headers: HeadersData
    private rows: RowsData
    private fileName: string

    constructor(fileName: string, headers: HeadersData, rows: RowsData) {
        this.headers = headers
        this.rows = rows
        this.fileName = fileName
    }

    public save() {
        const csvData = [this.headers, ...this.rows]
            .map(row => row.map(cell => `"${cell}"`).join(','))
            .join('\n')

        fs.writeFileSync(this.fileName, csvData, 'utf-8')
    }
}

export type HeadersData = string[]
export type RowsData = (string | number)[][]