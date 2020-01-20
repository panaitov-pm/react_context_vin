import React from 'react';

/**
 * @interface Props
 */
interface Props {

}

const VariableError: React.FC<Props> = () => {
    return (
        <>
            <h1>No description</h1>
            <a className="variable__link-error" href="/variables">Back to Variables</a>
        </>
    );
};

export default VariableError;
