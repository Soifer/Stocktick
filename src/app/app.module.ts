import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingngModule } from './app-routing/app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockComponent } from './stocks/stock/stock.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockSelectorComponent } from './stocks/stock-selector/stock-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './stocks/stocks.service';
import { TimeAgoPipe } from "time-ago-pipe";
import { OrderModule } from "ngx-order-pipe";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorMessageComponent } from './error-message/error-message.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    StocksComponent,
    StockComponent,
    StockListComponent,
    StockSelectorComponent,
    TimeAgoPipe,
    ErrorMessageComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingngModule,
    HttpClientModule,
    OrderModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
