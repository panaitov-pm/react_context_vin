import * as React from 'react';

/**
 * @interface Props
 */
interface Props {

}

const SearchForm: React.FC<Props> = ({}): any => {
    return (
        <form action="#" className="search-form">
            <label htmlFor="search" className="screen-reader-text">Search</label>
            <input id="search" type="search" className="search-form__input" placeholder="Enter search VIN..." />
            <button type="submit" className="search-form__button">Search</button>
        </form>
    );
};

export default SearchForm;
