import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {CoinMarketCapService} from "../../service/coin-market-cap.service";
import {map} from "rxjs/operators";
import {CoinItem} from "../../interfaces/coinItem.interface";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CoinListComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<CoinItem>;
  columnsToDisplay: string[] = ['name', 'symbol', 'cmcRank', 'totalSupply', 'maxSupply'];
  expandedElement: CoinItem | null = null;

  @ViewChild(MatSort) sort: MatSort;

  constructor( private coinMarketCap: CoinMarketCapService, private _liveAnnouncer: LiveAnnouncer) {
    this.coinMarketCap.getCoinList().pipe(
      map((data:any)=>{
        this.dataSource = new MatTableDataSource(data?.data?.coins);
      })
    ).subscribe()
  }


  ngOnInit(): void {}



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
