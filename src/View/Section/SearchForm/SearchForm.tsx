import React, { useState } from 'react';
import withVIN from '../../../Context/VIN/withVIN';
import useAxios from '@use-hooks/axios';
import getOnlyLatinAndNumberValue from '../../../Helper/SearchForm/getOnlyLatinAndNumberValue';

/**
 * @interface Props
 */
interface Props {

}

const SearchForm: React.FC<Props> = withVIN(({setDecodeVIN}): any => {

    const [vin, setVin] = useState('');

    const onChangeVIN = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        const val = getOnlyLatinAndNumberValue(value).toUpperCase();
        setVin(val);
    };

    // Query VIN search
    const { response, reFetch, error, loading } = useAxios({
        url: `vehicles/decodevin/${vin}?format=json`,
        method: 'GET',
        options: {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            }
        }
    });

    return (
        <form action="#" className="search-form">
            <label htmlFor="search" className="screen-reader-text">Search</label>
            <input
                id="search"
                type="search"
                className="search-form__input"
                placeholder="Enter search VIN..."
                value={vin}
                onChange={onChangeVIN}
            />
            <button type="submit" className="search-form__button">Search</button>
        </form>
    );
});

export default SearchForm;
