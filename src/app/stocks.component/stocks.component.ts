import { Component, AfterViewInit, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { MenuItem } from 'primeng/api';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class StocksComponent implements AfterViewInit, OnInit {
    httpOptions: any;

    // First Tab
    AppleInfo: any = {};
    AppleNews = [];
    AppleChartData = {};


    // Second Tab
    showSpecificCompanyInfo = false;
    SpecificCompanyInfo = {};
    sectionName = '';

    // Third Tab
    cryptoData: any = [];
    cryptoCols: any[];


    // 4th Tab 
    Earnings_showSpecificCompanyInfo = false;
    Earnings_specificCompanyInfo = {};
    Earnings_sectionName = '';


    constructor(private http?: HttpClient, private ref?: ChangeDetectorRef) {

    }

    ngOnInit() {
    }
    ngAfterViewInit() {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.getAppleStockInfo();
        this.getCryptoCurrencyData();
        this.cryptoCols = [
            { field: 'companyName', header: 'Company Name' },
            { field: 'open', header: 'Open' },
            { field: 'high', header: 'High' },
            { field: 'low', header: 'Low' },
            { field: 'latestPrice', header: 'Latest Price' },
            { field: 'latestTime', header: 'Latest Time' },
            { field: 'previousClose', header: 'Previous Close' },

        ];
    }

    getAppleStockInfo() {

        this.http.get('https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=10').subscribe(data => {
            //   console.log(data);
            this.AppleInfo = data['quote'];
            this.AppleNews = data['news'];
            // this.AppleChartData = data['chart'];
            let open = [];
            let high = [];
            let low = [];
            let close = [];
            data['chart'].forEach(element => {
                this.AppleChartData['labels'].push(element.label);
                open.push(element.open);
                high.push(element.high);
                low.push(element.low);
                close.push(element.close);

            });
            this.AppleChartData['datasets'] = [
                {
                    label: 'Open',
                    data: open,
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'High',
                    data: high,
                    fill: false,
                    borderColor: '#565656'
                },
                {
                    label: 'Low',
                    data: low,
                    fill: false,
                    borderColor: '#FF0000'
                },
                {
                    label: 'Close',
                    data: close,
                    fill: false,
                    borderColor: '#728dec'
                }
            ]

            this.ref.markForCheck();
        });
    }


    getCompanyInformation(name) {

        this.http.get('https://api.iextrading.com/1.0/stock/' + name + '/company').subscribe(data => {
            this.showSpecificCompanyInfo = true;
            this.SpecificCompanyInfo = data;
            this.ref.markForCheck();
        });
    }

    getCryptoCurrencyData() {
        this.http.get('https://api.iextrading.com/1.0/stock/market/crypto').subscribe(data => {
            this.cryptoData = data;
            this.ref.markForCheck();
        });
    }

    getEarningsCompanyInformation(name) {
        this.http.get('https://api.iextrading.com/1.0/stock/' + name + '/earnings').subscribe(data => {
            this.Earnings_showSpecificCompanyInfo = true;
            this.Earnings_specificCompanyInfo = data['earnings'];
            this.ref.markForCheck();
        });
    }

    openArticle(url) {
        window.open(url, '_blank');
    }
}