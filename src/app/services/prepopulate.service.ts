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

  async prepopulate(): Promise<boolean> {
    const coords: string[] = await this.locationService.getLocation();
    console.log(coords)
    if(coords == null) {
      return false;
    }
    console.log('reached')
    console.log(coords)
    const businesses: Observable<TransactionsDeliveryDao> = this.fusionService
      .getTransactions('delivery', new Coordinate(coords[0], coords[1]));
    console.log(businesses)
    return true;
  }
}

export { PrepopulateService }
