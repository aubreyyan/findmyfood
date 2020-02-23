import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { ModuleImportService } from '../services/module-import.service';

@NgModule({
  imports: [],
  declarations: [
    CarouselComponent
  ],
  exports: [
    CarouselComponent
  ]
})
class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    moduleImportService: ModuleImportService
  ) {
    moduleImportService.throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

export { CoreModule }
