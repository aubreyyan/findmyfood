import {Component, EventEmitter, Output} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {LocalstorageService, LocationService, PrepopulateService} from '../../../services';

@Component({
  selector: 'app-startup-modal',
  templateUrl: 'startup-modal.component.html'
})
class StartupModalComponent {
  private buttonText: string;

  constructor(public modal: NgbActiveModal,
              private locationService: LocationService,
              private prepopulateService: PrepopulateService,
              private localstorageService: LocalstorageService) {
    this.locationService.locationButtonText.subscribe(buttonText => this.buttonText = buttonText);
  }

  enable() {
    this.localstorageService.setItem('locationPref', true);
    this.locationService.changeButtonText('');
    this.prepopulateService.prepopulate().then(() => this.modal.close());
  }

  disable() {
    this.localstorageService.setItem('locationPref', false);
    this.locationService.changeButtonText('Enable location services');
    this.modal.dismiss();
  }
}

export { StartupModalComponent }
