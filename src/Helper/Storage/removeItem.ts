/**
 * @param {string} key
 */
const removeItem = (key: string): void => {
   sessionStorage.removeItem(key);
};

export default removeItem;
