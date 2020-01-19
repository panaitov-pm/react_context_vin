import React, { useEffect } from 'react';
import SearchForm from '../Section/SearchForm/SearchForm';
import DecodeVINList from '../Section/DecodeVIN/DecodeVINList';
import SearchVINList from '../Module/SearchedVINList/SearchVINList';
import useQueryDecodeVIN from '../../Hook/useQueryDecodeVIN';
import withVIN from '../../Context/VIN/withVIN';

/**
 * @interface Props
 */
interface Props {

}

const Home: React.FC<Props> = withVIN(({ setDecodeVIN, addSearchedVIN, searchVIN, setSearchVIN, searchedVINList }) => {

    // Query VIN search
    const { response, queryDecodeVIN, loading, decodeVIN } = useQueryDecodeVIN(searchVIN);
    const searchCriteria = response?.data?.SearchCriteria;

    // Set decodeVIN, clear input value
    useEffect(() => {
        setSearchVIN('');

        searchCriteria && setDecodeVIN(decodeVIN);

    }, [searchCriteria]);

    // Set searched VIN
    useEffect(() => {
        (searchCriteria && !searchedVINList.includes(searchCriteria)) &&
        addSearchedVIN(searchCriteria);

    }, [searchCriteria]);

    return (
        <main className="main">
            <aside className="sidebar">
                <SearchVINList
                    queryDecodeVIN={queryDecodeVIN}
                />
            </aside>
            <section className="decode-info">
                <SearchForm
                    queryDecodeVIN={queryDecodeVIN}
                />
                <DecodeVINList
                    isLoadingDecodeVIN={loading}
                />
            </section>
        </main>
    );
});

export default Home;
