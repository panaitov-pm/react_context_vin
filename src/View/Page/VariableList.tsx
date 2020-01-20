import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import withVIN from '../../Context/VIN/withVIN';
import useQueryVehicleVariableList from '../../Hook/useQueryVehicleVariableList';
import getDescription from '../../Helper/VariableList/getDescription';
import VariableListInfo from '../Module/VariableList/VariableListInfo';

/**
 * @interface Props
 */
interface Props {

}

const VariableList: React.FC<Props> = withVIN(({ vehicleVariableList, setVehicleVariableList }) => {

    const { response, error, loading, queryVehicleVariableList } = useQueryVehicleVariableList();

    useEffect(() => {
        queryVehicleVariableList();
    }, []);

    useEffect(() => {
        response?.data?.Results && setVehicleVariableList(response.data);
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
