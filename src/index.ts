import {CSVExporter, HeadersData, RowsData} from './CSVExporter';

const Headers: HeadersData = [
    'name', 'age', 'country'
]

const Rows: RowsData = [
    ['Alice', 30, 'USA'],
    ['Bob', 34, 'Canada'],
    ['Kate', 29, 'Ukraine']
]

const csv = new CSVExporter('output.csv', Headers, Rows)
csv.save()
