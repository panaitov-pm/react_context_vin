import React, { useEffect } from 'react';

import withVIN from '../../Context/VIN/withVIN';
import useQueryVehicleVariableList from '../../Hook/useQueryVehicleVariableList';
import VariableListInfo from '../Module/VariableList/VariableListInfo';
import getItem from '../../Helper/Storage/getItem';
import setItem from '../../Helper/Storage/setItem';
import StorageItem from '../../Types/Storage/StorageItem';
import Page404 from './Page404';

/**
 * @interface Props
 */
interface Props {

}

const VariableList: React.FC<Props> = withVIN(({ vehicleVariableList, setVehicleVariableList }) => {

    const { response, error, loading, queryVehicleVariableList } = useQueryVehicleVariableList();

    // Send query if storage has no VEHICLE_VARIABLE_LIST item
    useEffect(() => {
        const item = getItem(StorageItem.VEHICLE_VARIABLE_LIST, null);

        !item && queryVehicleVariableList();

        item && setVehicleVariableList(item);
    }, []);

    // set and save to storage VehicleVariableList when request is success
    useEffect(() => {
        if (!response?.data?.Results) return;

        setVehicleVariableList(response.data);
        setItem(StorageItem.VEHICLE_VARIABLE_LIST, response.data);

    }, [response?.data?.Results]);

    // Show error message when request has error
    if (error || typeof response?.data === 'string') return <Page404 title="No results" />;

    return (
        <section className="variable-info">
            {
                loading
                    ? <h1>Loading...</h1>
                    : <VariableListInfo />
            }
        </section>
    );
});

export default VariableList;
