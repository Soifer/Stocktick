import { Component, OnInit } from '@angular/core';
import { StockModel } from '../shared/stock.model';
import { StocksService } from '../stocks.service';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Observable, Observer, Subject, Subscription } from "rxjs";
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  readonly minInterval = 1.5;
  stepInterval = 0.5;
  interval: number = this.minInterval;
  readonly title = "My Portfolio";
  errorMessage: string;

  stocks: StockModel[];
  subject = new Subject();
  subscriber: Subscription;

  constructor(private stockService: StocksService) { }

  ngOnInit() {
    this.subscriber = this.subject
      .switchMap((period: number) => Observable.interval(period))
      .do(() => this.stockService.isDataToRequest() ? this.loadStocks() : this.stocks = [])
      .subscribe();
    this.subject.next(this.interval * 1000);
  }


  public loadStocks() {
    this.stockService.getStockRatesFromServer()
      .pipe(distinctUntilChanged())
      .subscribe(
        (data) => {
          this.stocks = data;
        }, (event) => {
          this.stockService.setErrorMessage("**The API server seems to be down :-( ...");
        },
        () => {
          this.stockService.setErrorMessage(" ");
        },
    );
  }

  onValueChanged(e) {
    this.subject.next(e.target.value * 1000);
  }

  compareByVolume(a: string, b: string): number {
    return +a < +b ? 1 : -1;
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
