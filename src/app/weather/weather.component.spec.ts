/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';

describe('Component: Weather', () => {
  it('should create an instance', () => {
    let component = new WeatherComponent(null);
    expect(component).toBeTruthy();
  });
});
