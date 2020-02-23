import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CarouselComponent, StartupModalComponent, ModalButtonComponent, NavComponent } from './components';
import { ModuleImportService } from '../services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [NgbModule, CommonModule],
  declarations: [
    CarouselComponent,
    StartupModalComponent,
    ModalButtonComponent,
    NavComponent
  ],
  exports: [
    CarouselComponent,
    ModalButtonComponent,
    NavComponent
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
