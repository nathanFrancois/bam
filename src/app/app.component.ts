import {Component, OnInit} from '@angular/core';
import {ApiService} from './app-api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ApiService ],
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {

  }


}
