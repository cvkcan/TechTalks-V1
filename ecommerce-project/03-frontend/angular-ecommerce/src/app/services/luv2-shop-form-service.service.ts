import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Country } from '../common/country';
import { State } from '../common/state';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Luv2ShopFormServiceService {

  private countriesUrl = environment.luv2shopApiUrl + "countries";
  private statesUrl = environment.luv2shopApiUrl + "states";

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
      map(r => r._embedded.countries)
    );
  }

  getStates(theCountryCode: string): Observable<State[]> {
    return this.httpClient.get<GetResponseStates>(`${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`).pipe(
      map(r => r._embedded.states)
    );
  }

  getCreditCardMonths(startMonth: number): Observable<number[]>{
    let data: number[] = [];
    for(let theMonth = startMonth; theMonth <= 12; theMonth++){
      data.push(theMonth);
    }
    return of(data);
  }

  getCreditCardYears(): Observable<number[]>{
    let data: number[] = [];
    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;
    for(let theYear = startYear; theYear <= endYear; theYear++){
      data.push(theYear);
    }
    return of(data);
  }
}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  }
}

interface GetResponseStates {
  _embedded: {
    states: State[];
  }
}