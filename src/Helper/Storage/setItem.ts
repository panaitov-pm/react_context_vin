/**
 * @param {string} key
 * @param value
 */
const setItem = (key: string, value: any): void => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export default setItem;
