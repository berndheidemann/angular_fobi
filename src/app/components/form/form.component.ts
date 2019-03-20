import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  show: Show;

  constructor(private showDataService: ShowDataService) {
    this.show = new Show(0, '');
  }

  ngOnInit() {
  }

  save() {
    this.showDataService.save(this.show);
    this.show = new Show(0, '');
  }

}
