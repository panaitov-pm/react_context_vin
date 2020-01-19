import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import withVIN from '../../../Context/VIN/withVIN';
import getOnlyLatinAndNumberValue from '../../../Helper/SearchForm/getOnlyLatinAndNumberValue';
import isValidVINMaxLength from '../../../Helper/SearchForm/isValidVINMaxLength';
import isEmpty from '../../../Helper/String/isEmpty';
import getMessageError from '../../../Helper/SearchForm/getMessageError';

/**
 * @interface Props
 */
interface Props {
    queryDecodeVIN: () => void;
}

const SearchForm: React.FC<Props> = withVIN(({ decodeVIN, queryDecodeVIN, searchVIN, setSearchVIN }): any => {

    const [vin, setVIN] = useState('');
    const [inputError, setInputError] = useState(false);

    // Clear search field after success request decodeVIN
    useEffect(() => {
        setVIN('');
    }, [decodeVIN.SearchCriteria]);


    /**
     * @param {any} value
     */
    const onChangeVIN = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {

        // Set vin when length <= 17, then transform vin toUpper
        if (isValidVINMaxLength(value)) {
            const searchValue = getOnlyLatinAndNumberValue(value).toUpperCase();

            setInputError(false);
            setSearchVIN(searchValue);
            setVIN(searchValue);
        }
    };

    /**
     * @param {React.FormEvent} e
     */
    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        // Show error message and stop query, when field is empty
        if (isEmpty(searchVIN)) {
            setInputError(true);
            return;
        }

        queryDecodeVIN();
    };

    return (
        <form
            className="search-form"
            onSubmit={onSubmit}
        >
            <div className={classNames('search-form__field-wrap', {
                'has-error': inputError,
            })}>
                <div className="search-form__field">
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
                </div>
                <div className="search-form__field-help">
                    {
                        getMessageError(inputError, 'Field is not be empty')
                    }
                </div>
            </div>
        </form>
    );
});

export default SearchForm;
