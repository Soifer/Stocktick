import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { StockModel } from '../shared/stock.model';
import { FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {
  stockList: StockModel[] = [];
  selected: string;
  stockSelector: FormControl;

  constructor(private stockService: StocksService) {

  }

  ngOnInit() {
    this.stockList = this.stockService.getStocks();

    this.stockService.stockListListener.subscribe(
      (list: StockModel[]) => {
        if (list) {
          this.stockList = list.filter(x => x.selected !== true);
        } else {
          this.stockList = [];
        }
      }
    );

    this.stockSelector = new FormControl(null);
    this.stockSelector.valueChanges.subscribe((stock: string) => {
      this.stockService.updateStockSelectedState(stock, true);
    })
  }

}
