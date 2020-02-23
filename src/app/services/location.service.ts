import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
class LocationService {
  buttonTextSource: BehaviorSubject<string> = new BehaviorSubject('');
  locationButtonText: Observable<string> = this.buttonTextSource.asObservable();

  constructor(private log: LoggerService) { }

  changeButtonText(buttonText: string): void {
    this.buttonTextSource.next(buttonText);
  }

  getLocation(): Promise<string[]> {
    if(navigator.geolocation) {
      return new Promise<string[]>((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          resolve([latitude.toString(), longitude.toString()]);
        });
      });
    }
    else {
      this.log.warn('No support for geolocation');
      return null;
    }
  }
}

export { LocationService }
