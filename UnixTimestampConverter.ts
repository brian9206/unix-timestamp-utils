import '.';
import { ICustomConverter } from 'json-typescript-mapper';

export class UnixTimestampConverter implements ICustomConverter {
    // singleton pattern
    private static _instance: UnixTimestampConverter = null;

    public static instance(): UnixTimestampConverter {
        if (UnixTimestampConverter._instance === null) {
            UnixTimestampConverter._instance = new UnixTimestampConverter();
        }

        return UnixTimestampConverter._instance;
    }


    fromJson(value: any): any {
        let timestamp: number = parseInt(value);

        if (isNaN(timestamp)) {
            return null;
        }

        return Date.unixTimestamp(timestamp);
    }

    toJson(value: any): any {
        if (value === null) {
            return null;
        }
        
        return (value as Date).toUnixTimestamp();
    }
}