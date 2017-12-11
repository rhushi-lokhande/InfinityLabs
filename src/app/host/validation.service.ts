import { Injectable } from '@angular/core';

@Injectable()
export class ValidatiionService {
    private hostList = [];
    public syncHostList(list) {
        this.hostList = list;
    }
    validateHost(host, index?) {
        const _p = this.hostList.filter((h, i) => {
            if (index > -1 && index === i) {
                return host.hostname === h.hostname || host.lookback === h.lookback ||
                    (h.childHost && h.childHost.filter(c_h => {
                        return host.hostname === c_h.hostname || host.lookback === c_h.lookback;
                    }).length);
            } else {
                return host.hostname === h.hostname || host.lookback === h.lookback;
            }
        });
        return _p.length ? false : true;
    }
}
