import getOnlyLatinAndNumberValue from './getOnlyLatinAndNumberValue';

describe('getOnlyLatinAndNumberValue', () => {
    it('should return latin letter and number', () => {
        const value = 'aa121ыыы';
        const res = 'aa121';

        expect(getOnlyLatinAndNumberValue(value)).toEqual(res);
    });

    it('should return empty value', () => {
        const value = null;
        const res = '';

        expect(getOnlyLatinAndNumberValue(value)).toEqual(res);
    });
});
