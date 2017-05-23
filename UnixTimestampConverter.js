"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require(".");
var UnixTimestampConverter = (function () {
    function UnixTimestampConverter() {
    }
    UnixTimestampConverter.instance = function () {
        if (UnixTimestampConverter._instance === null) {
            UnixTimestampConverter._instance = new UnixTimestampConverter();
        }
        return UnixTimestampConverter._instance;
    };
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
// singleton pattern
UnixTimestampConverter._instance = null;
exports.UnixTimestampConverter = UnixTimestampConverter;
