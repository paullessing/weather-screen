import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {CONFIG} from "../conf/config";

@Injectable()
export class WeatherService {

  constructor(private http: Http) {
  }

  public getForecast(lat: number, lng: number): Observable<any> {
    return this.http.get(
      `${CONFIG.FORECAST_IO.apiUrl}/${CONFIG.FORECAST_IO.apiKey}/${lat},${lng}?units=uk2`
    );
  }
}
