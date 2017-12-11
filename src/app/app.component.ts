import { Component } from '@angular/core';
import { Host } from './host.interfase';
import { ValidatiionService } from './host/validation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hostDetails: Array<Host> = [];
  constructor(private validatiionService: ValidatiionService) {
    this.validatiionService.syncHostList(this.hostDetails);
  }
  onNewAdd(host) {
    this.hostDetails.push(host);
  }
  remove(host) {
    this.hostDetails.splice(this.hostDetails.indexOf(host), 1);
  }
}
