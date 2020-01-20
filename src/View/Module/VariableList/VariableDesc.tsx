import React from 'react';
import { IVehicleVariableListResult } from '../../../Types/VIN/VehicleVariableList';
import getDescription from '../../../Helper/VariableList/getDescription';

/**
 * @interface Props
 */
interface Props {
    variable: IVehicleVariableListResult
}

const VariableDesc: React.FC<Props> = ({ variable }) => {
    return (
        <>
            <h1>{variable.Name}</h1>
            <div className="variable__desc">{getDescription(variable)}</div>
        </>
    );
};

export default VariableDesc;
