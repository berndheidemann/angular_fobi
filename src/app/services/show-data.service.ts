import {Injectable} from '@angular/core';
import {Show} from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {

  shows: Show[] = [];


  constructor() {
    this.shows.push(new Show(1, 'Fighters'));
    this.shows.push(new Show(2, 'Breaking Bad'));
  }

  save(show: Show) {
    this.shows.push(show);
  }


  delete(show: Show) {
    this.shows = this.shows.filter(s => s.id !== show.id);
  }
}
