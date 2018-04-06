import { Component, OnInit, Input } from '@angular/core';
import { StockModel } from '../shared/stock.model';
import { StocksService } from '../stocks.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  @Input() stock: StockModel;

  constructor(private stockService: StocksService) { }

  ngOnInit() {
  }

  onRemove(stock:StockModel) {
    this.stockService.updateStockSelectedState(stock.name);
  }
}
