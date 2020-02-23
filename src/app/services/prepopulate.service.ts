import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { LocationService } from './location.service';
import { FusionService } from './fusion.service';
import { Coordinate } from '../core/models';
import { TransactionsDeliveryDao } from './daos/fusion';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
class PrepopulateService {
  constructor(private locationService: LocationService,
              private fusionService: FusionService,
              private log: LoggerService) { }

  async prepopulate(): Promise<void> {
    const coords: string[] = await this.locationService.getLocation();
    if(coords == null) {
      return;
    }
    console.log('reached')
    console.log(coords)
    const businesses: Observable<TransactionsDeliveryDao> = this.fusionService
      .getTransactions('delivery', new Coordinate(coords[0], coords[1]));
    console.log(businesses)
  }
}

export { PrepopulateService }
