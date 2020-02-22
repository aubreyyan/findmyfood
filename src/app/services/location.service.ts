import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
class LocationService {
  constructor(private log: LoggerService) { }

  getLocation(): number[] {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        return [longitude, latitude];
      });
    } else {
      this.log.info('No support for geolocation');
      return null;
    }
  }
}

export { LocationService }
