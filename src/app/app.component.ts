import { Component } from '@angular/core';
import { Location } from './location';
import { State } from './state';
import eduInfo from '../edu01.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'us-st-cty-edu';
  sourceLocList: Location[];
  sourceSt: State[];

  constructor() {
    // template to see if state JSON works w/ fetch
    // this.displayLocationList = [];
    this.sourceSt = [];
    const stateURL = 'https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json';
    window.fetch(stateURL).then(function(response) {
      response.json().then(function(datum) {
        let state: object;
        for (let i: number = 0; i < datum.length; i++) {
          state = new State(datum[i].name, datum[i].abbreviation);
          this.sourceSt.push(state);
        }
      }.bind(this));
    }.bind(this));

    // problems with getting this JSON locally *and* remotely
    this.sourceLocList = [];
    // array of everything in JSON
    let location: Location;
    // tslint:disable-next-line: prefer-for-of
    for (let i: number = 0; i < 3; i++) {
      // tslint:disable-next-line: max-line-length
      // tslint:disable-next-line: no-string-literal
      location = new Location(eduInfo[i].fipsCode, eduInfo[i].state, eduInfo[i].areaName, eduInfo[i].ltHSD1418, eduInfo[i].hsd1418, eduInfo[i].someCol1418, eduInfo[i].bachPlus1418, eduInfo[i].percentltHSD1418, eduInfo[i].percenthsd1418, eduInfo[i].percentSomeCol1418, eduInfo[i].percentBachPlus1418);
      // if (eduInfo[i].fipsCode % 1000 === 0 && i !== 0) {
      //   state = location;
      //   this.sourceStateList.push(state);
      // } else if (eduInfo[i].fipsCode % 1000 !== 0) {
      //   county = location;
      //   this.sourceCountyList.push(county);
      // }
      this.sourceLocList.push(location);
    }

  }
}


