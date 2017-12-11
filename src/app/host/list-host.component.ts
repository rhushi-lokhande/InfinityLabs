import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Host } from '../host.interfase';

@Component({
    selector: 'list-host',
    templateUrl: 'list-host.component.html'
})

export class ListHostComponent implements OnInit {
    @Input() hostList: Array<Host>;
    @Output() remove = new EventEmitter();
    constructor() { }

    ngOnInit() { }
    removeHost(host) {
        this.remove.emit(host);
    }
    onNewAdd(host: any) {
        if (!this.hostList[host.index].childHost) {
            this.hostList[host.index].childHost = [];
        }
        this.hostList[host.index].childHost.push(host);
    }
    removeSubHost(host) {
        this.hostList.splice(this.hostList.indexOf(host), 1);
    }
    removeChildHost(host, index) {
        host.childHost.splice(index, 1);
    }
}
