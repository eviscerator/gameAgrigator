import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoinGeckoService {

  constructor(
    private http:HttpClient
  ) { }

  public getListCoin() {
  }

}
