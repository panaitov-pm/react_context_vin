const getOnlyLatinAndNumberValue = (value: string) => {
    return value.replace(/[^A-Z0-9]+/ig, '');
};

export default getOnlyLatinAndNumberValue
