import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks/stocks.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  error: string = "fsafdsaf asfassssssssssss asffffffff";

  constructor(private stockService: StocksService) { }

  ngOnInit() {
    this.stockService.errorMessage.subscribe((message: string) => {
      this.error = message;
    });
  }

}
