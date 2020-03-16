import moment from "moment";

export function newUtcDatetimeString() {
    return (new Date()).toISOString();
};

export function newDateISOString() {
    return (new Date()).toISOString();
};

export function newMySQLDateISOString(date?) {
    if (date) {
        return moment.utc(date).format("YYYY-MM-DD HH:mm:ss.SSS[Z]");
    }
    return moment.utc().format("YYYY-MM-DD HH:mm:ss.SSS[Z]");
};

export function newUtcDate() {
    return moment().utc().toDate();
};

export function newDate() {
    return moment().utc().toDate();
};

export function parseDate(str) {
    return moment(str).utc();
};

export function formatDate(date, format) {
    const _format = format ? format : "YYYY/MM/DD h:mm";

    if (date) {
        return moment(date).format(_format);
    }

    return moment().utc().format(_format);
};

export function formatDatetime(date, format = "DD-MM-YYYY h:mm") {
    return moment(date || newDate()).format(format);
};

export function toLocal(date) {
    return date.local();
};

import * as format from "date-fns/format";

export function newUTCDate(d = new Date()) {
    return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));
}

export function toLocalDateString(d = new Date(), f = "DD-MM-YYYY H:mm") {
    return format(d, f);
}

export function newDateFromNow(number, type) {
    return moment().add(number, type).utc().toDate();
};
