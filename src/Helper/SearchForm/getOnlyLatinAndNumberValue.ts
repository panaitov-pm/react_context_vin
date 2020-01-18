const getOnlyLatinAndNumberValue = (value: string) => {
    if (typeof value !== 'string') return '';

    return value.replace(/[^A-Z0-9]+/ig, '');
};

export default getOnlyLatinAndNumberValue
