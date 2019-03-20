import {Component, OnInit} from '@angular/core';
import {ShowDataService} from '../../services/show-data.service';
import {Show} from '../../models/show';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private showDataService: ShowDataService) {
  }

  ngOnInit() {
  }

  get show(): Show {
    return this.showDataService.detailShow;
  }

}
