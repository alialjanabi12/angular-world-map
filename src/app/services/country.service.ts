import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryResponse } from './country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  //  API URL
  private apiUrl = 'https://api.worldbank.org/V2/country/';

  constructor(private http: HttpClient) {}

  getCountryInfo(countryCode: string): Observable<CountryResponse> {
    const url = `${this.apiUrl}${countryCode}?format=json`;
    return this.http.get<CountryResponse>(url);
  }
}
