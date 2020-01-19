import React from 'react';
import classNames from 'classnames';

import withVIN from '../../../Context/VIN/withVIN';

/**
 * @interface Props
 */
interface Props {
    queryDecodeVIN: () => void;
}

const SearchVINList: React.FC<Props> = withVIN(({ queryDecodeVIN, setSearchVIN, searchedVINList, decodeVIN }): any => {

    const onQueryClick = (searchedVIN: string): void => {
        setSearchVIN(searchedVIN.substr(4, searchedVIN.length));
        queryDecodeVIN();
    };

    return (
        <ul className="searched-list">
            <li className="searched-list__item">Searched VIN</li>
            {
                searchedVINList.slice(0, 5).map((searchedVIN: string, index: number) => (
                    <li
                        key={`${searchedVIN}_${index}`}
                        className="searched-list__item"
                    >
                        <button
                            className={classNames('searched-list__btn', {
                                'is-active': searchedVIN === decodeVIN.SearchCriteria
                            })}
                            type="button"
                            onClick={() => onQueryClick(searchedVIN)}
                        >
                            {searchedVIN}
                        </button>
                    </li>
                ))
            }
        </ul>
    );
});

export default SearchVINList;
