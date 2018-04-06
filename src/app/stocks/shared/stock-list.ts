import { StockModel } from "./stock.model";

export class StockList {
   static get(): StockModel[] {
        return [
            { name: 'AAPL', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'ARNA', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'CLDR', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'FB', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'AMZN', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'PLAY', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'CBS', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'NBIX', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'SBGI', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'LAUR', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'AAP', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'BA', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'BABA', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'CABO', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'DATA', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'MAN', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'ZEN', selected: false, price: 0, timestamp: '', volume: 0 },
            { name: 'ZOES', selected: false, price: 0, timestamp: '', volume: 0 }
        ]
    }

}

export class StockQuote {
    symbol: string;
    price: number;
    volume: string;
    timestamp: string;
  }