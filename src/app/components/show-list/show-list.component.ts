import {Component, OnInit} from '@angular/core';
import {ShowDataService} from '../../services/show-data.service';
import {Show} from '../../models/show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private showDataService: ShowDataService) {
  }

  get shows(): Show[] {
    return this.showDataService.shows;
  }

  delete(show: Show) {
    this.showDataService.delete(show);
  }


  ngOnInit() {
  }

  showDetail(show: Show) {
    this.showDataService.showDetail(show);

  }
}
