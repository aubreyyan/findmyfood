import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
class ModuleImportService {
  throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
    if (parentModule) {
      const msg = `${moduleName} has already been loaded. Import Core modules in the AppModule only.`;
      throw new Error(msg);
    }
  }
}

export { ModuleImportService }
