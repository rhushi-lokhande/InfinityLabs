import { Component, Input, OnInit } from '@angular/core';
import { Host } from '../host.interfase';
@Component({
    selector: 'host',
    templateUrl: 'host.component.html'
})

export class HostComponent implements OnInit {
    @Input() host: Host;
    constructor() { }

    ngOnInit() { }
}
