import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location';
import { State} from '../state';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  @Input() locations: Location[];
  @Input() states: State[];
  constructor() { }
  ngOnInit() {
  }

}
