import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../interfaces/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  private _accountName = 'sothebys_international_realty';
  // Need to use a proxy for the https://staging.perchwell.com/api/feeds endpoint to avoid CORS issues
  private _url = 'http://localhost:4200/api';
  private _headers = new HttpHeaders({
    "Authorization": "Qs7MGQchX2DUZ9BX8wYpjjgM"
  });

  constructor(private _http: HttpClient) { }

  getListingsForAccount(accountName?: string): Observable<Listing> {
    const accountNameForRequest = accountName || this._accountName;
    return this._http.get<Listing>(`${this._url}/${accountNameForRequest}`, {
      headers: this._headers
    });
  }
}
