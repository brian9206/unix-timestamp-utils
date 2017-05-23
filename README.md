# unix-timestamp-utils
Unix timestamp extensions for native ```Date``` object

# json-typescript-mapper
```UnixTimestampConverter``` is a ICustomConverter implementation for extended ```Date``` object

# How to use
```
import 'unix-timestamp-utils';

// timestamp to Date
let date: Date = Date.unixTimestamp(YOUR_TIMESTAMP);

// Date to timestamp
let ts: number = new Date().toUnixTimestamp();
```

json-typescript-mapper:
```
import 'unix-timestamp-utils';
import { UnixTimestampConverter } from 'unix-timestamp-utils';

export class Test {
    @JsonProperty({ name: 'time', customerConverter: UnixTimestampConverter.instance() })
    time: Date;
}
```