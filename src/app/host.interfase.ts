export interface Host {
    hostname: string;
    lookback: string;
    addnew?: boolean;
    childHost?: Array<Host>;
}
