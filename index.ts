import { UnixTimestampConverter } from './UnixTimestampConverter';

// Date extension
declare global {
    interface Date {
        toUnixTimestamp(): number;
    }

    interface DateConstructor {
        unixTimestamp(timestamp: number): Date;
    }
}

Date.prototype.toUnixTimestamp = function(): number {
    return Math.ceil(this.getTime() / 1000);
}

Date.unixTimestamp = function(timestamp: number): Date {
    return new Date(timestamp * 1000);
}

// export
export { UnixTimestampConverter }
