import { Component } from '@angular/core';
import {WeatherComponent} from "./weather/weather.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  directives: [WeatherComponent]
})

export class AppComponent {
  title = 'app works!';
}
