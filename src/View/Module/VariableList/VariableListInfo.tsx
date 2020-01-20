import React from 'react';
import getDescription from '../../../Helper/VariableList/getDescription';
import withVIN from '../../../Context/VIN/withVIN';
import { useHistory } from 'react-router-dom';
import Fade from '../Animation/Fade';
import { urlConfig } from '../../../System/Config';

/**
 * @interface Props
 */
interface Props {

}

const VariableListInfo: React.FC<Props> = withVIN(({ vehicleVariableList }) => {
    const history = useHistory();

    return (
        <>
            <Fade delay={0} className="fade">
                <h1 className="fade">Vehicle Variables</h1>
            </Fade>
            <ol className="variable-list">
                {
                    vehicleVariableList.Results && (
                        vehicleVariableList.Results.map((variable, index: number) => {

                            if (!getDescription(variable)) return null;

                            return (
                                <Fade delay={index * 10} className="fade-down">
                                    <li
                                        key={variable.ID}
                                        className="variable-list__item fade-down"
                                    >
                                        <a
                                            href="/" className="variable-list__link"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                history.push(`/${urlConfig.variables.url}/${variable.ID}`)
                                            }}
                                        >
                                            <span className="variable-list__index">{index + 1}</span>
                                            <span className="variable-list__name">{variable.Name}</span>
                                        </a>
                                    </li>
                                </Fade>
                            )
                        })
                    )
                }
            </ol>
        </>
    );
});

export default VariableListInfo;
