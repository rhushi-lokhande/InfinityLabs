import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValidatiionService } from './validation.service';

@Component({
    selector: 'add-host',
    templateUrl: 'addhost.component.html'
})

export class AddHostComponent implements OnInit {
    constructor(private validatiionService: ValidatiionService) { }
    @Input() index: number;
    @Output() onNewAdd = new EventEmitter();
    hostName: String = '';
    loopBack: String = '';
    showErrorIp = false;
    showErrorName = false;
    hostNotUnique = false;
    ngOnInit() { }
    addHost() {
        this.showErrorIp = false;
        this.showErrorName = false;
        this.hostNotUnique = false;
        const host = {
            hostname: this.hostName,
            lookback: this.loopBack,
            index: this.index
        };
        if (!this.hostName) {
            this.showErrorName = true;
        }
        if (!this.validateIP(this.loopBack)) {
            this.showErrorIp = true;
        }
        if (!this.validatiionService.validateHost(host, this.index)) {
            this.hostNotUnique = true;
        }
        if (!this.showErrorName && !this.showErrorIp && !this.hostNotUnique) {
            this.onNewAdd.emit(host);
            this.hostName = this.loopBack = '';
        }
    }
    validateIP(ipAddress) {
        const ipv4Re = new RegExp('^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}', 'i');
        return ipv4Re.test(ipAddress);
    }
}
