import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { StockList, StockQuote } from './shared/stock-list';
import { StockModel } from './shared/stock.model';
import { map, flatMap, toArray, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { isNullOrUndefined } from 'util';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


type API_KEYS = 'MJJOQ69Y676IMJWR' | 'OLF1CKCAYO59A7EF' | 'R0UTKBAMC74O24MF';

@Injectable()
export class StocksService {
  private key: API_KEYS = 'MJJOQ69Y676IMJWR';
  private stockList: StockModel[] = [];

  stockListListener = new Subject();
  errorMessage = new Subject();

  constructor(private http: HttpClient) {
    this.stockList = StockList.get();   
  }

  setErrorMessage(message:string){
     this.errorMessage.next(message);
  }

  getStocks() {   
    return this.stockList;
  }

  public getStockRatesFromServer(): Observable<StockModel[]> {
     if(this.stockList.length > 0){
    return this.http
      .get(
        `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${this.convertStockModelToCSVString(
          this.stockList.filter(x => x.selected === true)
        )}&apikey=${this.key}`
      )
      .pipe(
        flatMap((x: any) => x['Stock Quotes']),
        map(x => this.convertToStockItem(x)),
        toArray()
      )
     }
  }

  isDataToRequest():boolean{
    return this.stockList.some(x=>x.selected ===true);
  }

  updateStockSelectedState(stock: string, isSelected = false) { 
    let found = this.stockList.find(x => x.name === stock);
    if (!isNullOrUndefined(found)) {
      found.selected = isSelected;
      this.stockListListener.next(this.stockList);
    }    
  }

  private convertStockModelToCSVString(list: StockModel[]): string {
    return this.convertToCSVString(this.convertStockModelToString(list));
  }

  private convertStockModelToString(list: StockModel[]): string[] {
    return list.map(x => x.name);
  }

  private convertToCSVString(list: string[]): string {
    const res = list.join(',');
    return res.toLowerCase();
  }

  private convertToStockItem(item: any): StockModel {
    const res: StockModel = {
      name: '',
      volume: 0,
      timestamp: '',
      price: 0,
      selected: false
    };
    res.price = item['2. price'];
    res.name = item['1. symbol'];
    res.timestamp = item['4. timestamp'];
    res.volume = item['3. volume'];
    return res;
  }

}
