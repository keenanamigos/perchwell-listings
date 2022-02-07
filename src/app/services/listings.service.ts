import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  private _accountName = 'sothebys_international_realty';
  private _url = 'https://staging.perchwell.com/api/feeds/';

  constructor(private http: HttpClient) { }

  getListingsForAccount(accountName?: string): any {
    const accountNameForRequest = accountName || this._accountName;
    return this.http.get(`${this._url}/${accountNameForRequest}`);
  }
}
