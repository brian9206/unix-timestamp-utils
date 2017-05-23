"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require(".");
var UnixTimestampConverter = (function () {
    function UnixTimestampConverter() {
    }
    UnixTimestampConverter.prototype.fromJson = function (value) {
        var timestamp = parseInt(value);
        if (isNaN(timestamp)) {
            return null;
        }
        return Date.unixTimestamp(timestamp);
    };
    UnixTimestampConverter.prototype.toJson = function (value) {
        if (value === null) {
            return null;
        }
        return value.toUnixTimestamp();
    };
    return UnixTimestampConverter;
}());
exports.UnixTimestampConverter = UnixTimestampConverter;
