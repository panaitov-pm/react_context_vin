import React, { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';

import withVIN from '../../../Context/VIN/withVIN';
import getOnlyLatinAndNumberValue from '../../../Helper/SearchForm/getOnlyLatinAndNumberValue';
import useQueryDecodeVIN from '../../../Hook/useQueryDecodeVIN';
import isValidVINMaxLength from '../../../Helper/SearchForm/isValidVINMaxLength';
import isEmpty from '../../../Helper/String/isEmpty';
import getMessageError from '../../../Helper/SearchForm/getMessageError';

/**
 * @interface Props
 */
interface Props {
    setIsLoadingDecodeVIN: (isLoadingDecodeVIN: boolean) => void
}

const SearchForm: React.FC<Props> = withVIN(({ setDecodeVIN, setIsLoadingDecodeVIN }): any => {

    const [vin, setVin] = useState('');
    const [inputError, setInputError] = useState(false);

    // Query VIN search
    const { response, queryDecodeVIN, error, loading, decodeVIN } = useQueryDecodeVIN(vin);

    // Set decodeVIN, clear input value
    useEffect(() => {
        setDecodeVIN(decodeVIN);
        setVin('');
    }, [response?.data?.SearchCriteria]);

    //Set setIsLoadingDecodeVIN
    useEffect(() => {
        setIsLoadingDecodeVIN(loading);
    }, [loading]);

    //Clear input value

    /**
     * @param {any} value
     */
    const onChangeVIN = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {

        // Set vin when length <= 17, then transform vin toUpper
        if (isValidVINMaxLength(value)) {
            setInputError(false);
            setVin(getOnlyLatinAndNumberValue(value).toUpperCase());
        }
    };

    /**
     * @param {React.FormEvent} e
     */
    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        if (isEmpty(vin)) {
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
