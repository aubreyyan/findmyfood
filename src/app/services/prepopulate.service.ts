import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import {LocationService} from './location.service';

@Injectable()
class PrepopulateService {
  constructor(private http: HttpClient,
              private locationService: LocationService,
              private log: LoggerService) { }

  prepopulate(): void {
    const coords = this.locationService.getLocation();
    // TODO do stuff to view
  }
}

export { PrepopulateService }
