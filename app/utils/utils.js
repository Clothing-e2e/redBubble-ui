const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

const isArray = (arr) => {
    return Array.isArray(arr);
}

const isString = (str) => {
    return typeof str === 'string' || str instanceof String;
}

/**
 * @description Basic util functions
 */
const utils = {
    isArray,
    ensureArray: (arr) => isArray(arr) ? arr : [],
    isArrayEmpty: (arr) => !isArray(arr) || !arr.length,
    isObject,
    ensureObject: (obj) => isObject(obj) ? obj : {},
    hasObjProperty: (obj, key) => isObject(obj) && Object.prototype.hasOwnProperty.call(obj, key),
    isString,
    ensureString: (str, fallBack = '') => isString(str) ? str : utils.ensureString(fallBack),
    isStringEmpty: (str) => isString(str) && str.length === 0,
    capitalizeFirst: (str) => isString(str) && str.charAt(0).toUpperCase() + str.slice(1),
};

export default utils;