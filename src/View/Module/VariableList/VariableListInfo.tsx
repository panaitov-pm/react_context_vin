import * as React from 'react';
import getDescription from '../../../Helper/VariableList/getDescription';
import withVIN from '../../../Context/VIN/withVIN';
import { useHistory } from 'react-router-dom';

/**
 * @interface Props
 */
interface Props {

}

const VariableListInfo: React.FC<Props> = withVIN(({  vehicleVariableList }) => {
    const history = useHistory();

    return (
        <>
            <h1>Vehicle Variables</h1>
            <ol className="variable-list">
                {
                    vehicleVariableList.Results && (
                        vehicleVariableList.Results.map((variable, index: number) => {

                            if (!getDescription(variable)) return null;

                            return (
                                <li
                                    key={variable.ID}
                                    className="variable-list__item"
                                >
                                    <a
                                        href="/" className="variable-list__link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            history.push(`/variables/${variable.ID}`)
                                        }}
                                    >
                                        <span className="variable-list__index">{index + 1}</span>
                                        <span className="variable-list__name">{variable.Name}</span>
                                    </a>
                                </li>
                            )})
                    )
                }
            </ol>
        </>
    );
});

export default VariableListInfo;
