import React from 'react';
import { IVehicleVariableListResult } from '../../../Types/VIN/VehicleVariableList';
import getDescription from '../../../Helper/VariableList/getDescription';
import Fade from '../Animation/Fade';

/**
 * @interface Props
 */
interface Props {
    variable: IVehicleVariableListResult
}

const VariableDesc: React.FC<Props> = ({ variable }) => {
    return (
        <>
            <Fade delay={0} className="fade-up">
                <h1 className="fade-up">{variable.Name}</h1>
            </Fade>
            <Fade delay={100} className="fade-up">
                <div className="variable__desc fade-up">{getDescription(variable)}</div>
            </Fade>
        </>
    );
};

export default VariableDesc;
