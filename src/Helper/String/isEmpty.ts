/**
 * @param {string} value
 * @return {boolean}
 */
const isEmpty = (value: string | null): boolean => value ? value.length === 0 : true;

export default isEmpty;
