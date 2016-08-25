import { Component, OnInit } from '@angular/core';
import {WeatherService} from "./weather.service";
import {CONFIG} from "../conf/config";
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  private weather: Observable<any>;

  constructor(
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.weather = this.weatherService.getForecast(CONFIG.DEFAULT_LOCATION.LATITUDE, CONFIG.DEFAULT_LOCATION.LONGITUDE);
  }
}
