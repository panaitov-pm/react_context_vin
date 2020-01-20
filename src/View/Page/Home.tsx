import React, { useEffect } from 'react';
import SearchForm from '../Section/SearchForm/SearchForm';
import DecodeVINList from '../Section/DecodeVIN/DecodeVINList';
import SearchVINList from '../Module/SearchedVINList/SearchVINList';
import useQueryDecodeVIN from '../../Hook/useQueryDecodeVIN';
import withVIN from '../../Context/VIN/withVIN';
import removeItem from '../../Helper/Storage/removeItem';
import StorageItem from '../../Types/Storage/StorageItem';
import { initialDecodeVIN } from '../../Context/VIN/VINContext';
import Fade from '../Module/Animation/Fade';

/**
 * @interface Props
 */
interface Props {

}

const Home: React.FC<Props> = withVIN(({ setDecodeVIN, setVehicleVariableList, addSearchedVIN, searchVIN, setSearchVIN, searchedVINList }) => {

    // Query VIN search
    const { response, queryDecodeVIN, loading, decodeVIN } = useQueryDecodeVIN(searchVIN);
    const searchCriteria = response?.data?.SearchCriteria;

    // Clean VehicleVariableList for new request
    useEffect(() => {
        removeItem(StorageItem.VEHICLE_VARIABLE_LIST);
        setVehicleVariableList(initialDecodeVIN);
    }, []);

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
                <Fade delay={0} className="fade-up">
                    <SearchVINList
                        queryDecodeVIN={queryDecodeVIN}
                    />
                </Fade>
            </aside>
            <section className="decode-info">
                <Fade delay={0} className="fade-up">
                    <SearchForm
                        queryDecodeVIN={queryDecodeVIN}
                    />
                </Fade>
                <DecodeVINList
                    isLoadingDecodeVIN={loading}
                />
            </section>
        </main>
    );
});

export default Home;
