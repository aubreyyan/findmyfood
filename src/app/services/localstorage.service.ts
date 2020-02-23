import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable({providedIn: 'root'})
class LocalstorageService {
  constructor(@Inject(LOCAL_STORAGE) private storageService: StorageService) { }

  setItem(key: string, value: any): void {
    this.storageService.set(key, value);
  }

  getItem(key: string): any {
    return this.storageService.get(key);
  }

  deleteItem(key: string): void {
    this.storageService.remove(key);
  }
}

export { LocalstorageService }
