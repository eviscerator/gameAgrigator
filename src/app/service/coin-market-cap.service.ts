import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const KEY = '5139140c-0582-4f55-8339-76cec04f1a22';
const URL_COIN_MARKET_CAP = 'https://pro-api.coinmarketcap.com/';

@Injectable({
  providedIn: 'root'
})
export class CoinMarketCapService {

  constructor( private http:HttpClient) { }

  public getCoinList() {
   return this.http.get(URL_COIN_MARKET_CAP+`v1/cryptocurrency/category`,{
      headers: {
        'X-CMC_PRO_API_KEY': KEY
      },
      params:{
        start: '1',
        limit:'500',
        id: "6053dfb66be1bf5c15e865ee",
      }
    })
  }
}
