import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import withVIN from '../../Context/VIN/withVIN';
import { IParams } from '../../Types/History/Params';
import getVariable from '../../Helper/VariableList/getVariable';
import VariableError from '../Module/VariableList/VariableError';
import VariableDesc from '../Module/VariableList/VariableDesc';
import setDocumentTitle from '../../Helper/DocumentTitle/setDocumentTitle';

/**
 * @interface Props
 */
interface Props {

}

const Variable: React.FC<Props> = withVIN(({ vehicleVariableList, decodeVIN }) => {
    const params = useParams<IParams>();

    const variable = getVariable(vehicleVariableList, params.variableId);

    //setDocumentTitle
    useEffect(() => {
        setDocumentTitle(variable.Name);
    }, []);

    return (
        <section className="variable-info">
            {
                (!variable)
                    ? <VariableError />
                    : <VariableDesc variable={variable} />
            }
        </section>
    );
});

export default Variable;
