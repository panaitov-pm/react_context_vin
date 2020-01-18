import React from 'react';
import { ComponentType } from 'react';
import VINContext, { VINContextProps } from './VINContext';

/**
 * @param {React.ComponentType<Props & VINContextProps>} Component
 * @return {(props: Props) => any}
 */
const withVIN = <Props extends object>(Component: ComponentType<Props & VINContextProps>) => (props: Props) => (
    <VINContext.Consumer>
        {VIN => <Component {...props} {...VIN} />}
    </VINContext.Consumer>
);

export default withVIN;
