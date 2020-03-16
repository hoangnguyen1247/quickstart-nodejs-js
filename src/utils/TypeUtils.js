export function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

export function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

export function isArray(value) {
    // return value && typeof value === 'object' && value.constructor === Array;
    return Array.isArray(value);
}

export function isEmptyArray(value) {
    return Array.isArray(value) && value.length === 0;
}

export function isNotEmptyArray(value) {
    return Array.isArray(value) && value.length === 0;
}

export function isFunction (value) {
    return typeof value === 'function';
}

export function isObject(a) {
    return (!!a) && typeof a === 'object' && (a.constructor === Object);
}

export function isEmptyObject(a) {
    return (!!a) && typeof a === 'object' && (a.constructor === Object) && Object.keys(a).length === 0;
}

export function isNotEmptyObject(a) {
    return (!!a) && typeof a === 'object' && (a.constructor === Object) && Object.keys(a).length > 0;
}

export function isRegExp(a) {
    return (!!a) && typeof a === 'object' && (a.constructor === RegExp);
}

export function isDate (value) {
    return value instanceof Date;
}

export function isSymbol (value) {
    return typeof value === 'symbol';
}
