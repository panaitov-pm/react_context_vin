/**
 * @param {string} value
 * @return {boolean}
 */
const isValidVINMaxLength = (value: string): boolean => value.length <= 17;

export default isValidVINMaxLength;
