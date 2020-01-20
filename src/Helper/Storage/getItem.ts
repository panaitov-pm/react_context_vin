/**
 * @param {string} key
 * @param byDefault
 * @return {any}
 */
const getItem = (key: string, byDefault: any) => {
    const item = sessionStorage.getItem(key);

    if (!item) return byDefault;

    return JSON.parse(item);
};

export default getItem;
