import React, { Reducer, useContext, useReducer } from 'react';
import VINContext, { VINContextProps } from './VINContext';
import IDecodeVIN from '../../Types/VIN/DecodeVIN';

/**
 * @interface Props
 */
interface Props {
    getDefaultProps: () => Partial<VINContextProps>;
}

export enum VINActions {
    SET_DECODE_VIN = 'SET_DECODE_VIN',
}

/**
 * @interface Action
 */
interface Action {
    type: string;
    decodeVIN: IDecodeVIN;
}

/**
 * @param {VINContextProps} prevState
 * @param {Action} action
 * @return {VINContextProps}
 */
const reducer: Reducer<VINContextProps, Action> = (prevState, action): VINContextProps => {
    switch (action.type) {
        case VINActions.SET_DECODE_VIN:
            return {
                ...prevState,
                decodeVIN: {
                    ...prevState.decodeVIN,
                    ...action.decodeVIN
                }
            };
        default:
            return prevState;
    }
};

/**
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @param {() => Partial<VINContextProps>} getDefaultProps
 * @return {any}
 * @constructor
 */
const VINStore: React.FC<Props> = ({ children, getDefaultProps }) => {

    const vinInfo = useContext<VINContextProps>(VINContext);

    const [state, dispatch] = useReducer(reducer, {
        ...vinInfo,

        setDecodeVIN: (decodeVIN: IDecodeVIN) => dispatch({type: VINActions.SET_DECODE_VIN, decodeVIN}),

        ...getDefaultProps(),
    });
//TODO save searched VINs
  //  setItem('tasks', JSON.stringify(state.tasks));

    return (
        <VINContext.Provider value={{ ...state, ...getDefaultProps() }}>
            {children}
        </VINContext.Provider>
    );
};

VINStore.defaultProps = {
    getDefaultProps: () => ({}),
};

export default VINStore;
