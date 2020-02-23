import {Component, OnInit} from '@angular/core';
import {PrepopulateService} from '../../services/prepopulate.service';

@Component({
  selector: 'app-main-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.scss']
})
class CarouselComponent implements OnInit {
  constructor(private prepopulateService: PrepopulateService) { }

  ngOnInit(): void {
    console.log('got here 1');
    this.prepopulateService.prepopulate();
  }
}

export { CarouselComponent }
