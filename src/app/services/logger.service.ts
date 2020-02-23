import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
class LoggerService {
  info(msg: any): void {
    console.log(msg);
  }

  warn(msg: any): void {
    console.warn(msg);
  }

  error(msg: any): void {
    console.error(msg);
  }
}

export { LoggerService }
