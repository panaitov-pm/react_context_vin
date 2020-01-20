import React from 'react';
import Fade from '../Animation/Fade';
import { urlConfig } from '../../../System/Config';

/**
 * @interface Props
 */
interface Props {

}

const VariableError: React.FC<Props> = () => {
    return (
        <>
            <Fade delay={0} className="fade-up">
                <h1 className="fade-up">No description</h1>
            </Fade>
            <Fade delay={100} className="fade-up">
                <a className="variable__link-error fade-up" href={`/${urlConfig.variables.url}`}>Back to Variables</a>
            </Fade>
        </>
    );
};

export default VariableError;
