import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({providedIn: 'root'})
class LocationService {
  constructor(private log: LoggerService) { }

  getLocation(): string[] {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log([String(latitude), String(longitude)])
        return [String(latitude), String(longitude)];
      });
    } else {
      this.log.warn('No support for geolocation');
      return null;
    }
  }
}

export { LocationService }
