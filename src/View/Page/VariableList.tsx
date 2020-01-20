import React, { useEffect } from 'react';

import withVIN from '../../Context/VIN/withVIN';
import useQueryVehicleVariableList from '../../Hook/useQueryVehicleVariableList';
import VariableListInfo from '../Module/VariableList/VariableListInfo';
import getItem from '../../Helper/Storage/getItem';
import setItem from '../../Helper/Storage/setItem';
import StorageItem from '../../Types/Storage/StorageItem';

/**
 * @interface Props
 */
interface Props {

}

const VariableList: React.FC<Props> = withVIN(({ vehicleVariableList, setVehicleVariableList }) => {

    const { response, error, loading, queryVehicleVariableList } = useQueryVehicleVariableList();

    useEffect(() => {
        const item = getItem(StorageItem.VEHICLE_VARIABLE_LIST, null);

        !item && queryVehicleVariableList();

        item && setVehicleVariableList(item);
    }, []);

    useEffect(() => {
        if (!response?.data?.Results) return;

        setVehicleVariableList(response.data);
        setItem(StorageItem.VEHICLE_VARIABLE_LIST, response.data);

    }, [response?.data?.Results]);

    if (error) return <h1>Something went wrong</h1>;

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
