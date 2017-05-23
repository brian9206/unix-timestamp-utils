"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnixTimestampConverter_1 = require("./UnixTimestampConverter");
exports.UnixTimestampConverter = UnixTimestampConverter_1.UnixTimestampConverter;
Date.prototype.toUnixTimestamp = function () {
    return Math.ceil(this.getTime() / 1000);
};
Date.unixTimestamp = function (timestamp) {
    return new Date(timestamp * 1000);
};
