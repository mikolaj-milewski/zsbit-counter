import { Component, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';
  @ViewChild('cd', { static: false }) private countdown?: CountdownComponent;
  ngAfterViewInit() {
    this.countdown?.begin();
  }

  get config(): CountdownConfig {
    return {
      format: `00:mm:ss`,
      // stopTime: Date.parse("Mon, 05 Jul 2021 19:00:00"), // 001
      stopTime: Date.parse("Mon, 06 Sep 2021 19:00:00"), // 010
    };
  }
}