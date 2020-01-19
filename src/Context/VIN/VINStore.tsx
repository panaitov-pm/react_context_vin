import React, { Reducer, useContext, useReducer } from 'react';
import VINContext, { VINContextProps } from './VINContext';
import IDecodeVIN from '../../Types/VIN/DecodeVIN';
import IVehicleVariableList from '../../Types/VIN/VehicleVariableList';

/**
 * @interface Props
 */
interface Props {
    getDefaultProps: () => Partial<VINContextProps>;
}

export enum VINActions {
    SET_SEARCH_VIN = 'SET_SEARCH_VIN',
    SET_DECODE_VIN = 'SET_DECODE_VIN',
    SET__VEHICLE_VARIABLE_LIST = 'SET__VEHICLE_VARIABLE_LIST',
    ADD_SEARCHED_VIN = 'ADD_SEARCHED_VIN',
}

/**
 * @interface Action
 */
interface Action {
    type: string;
    decodeVIN?: IDecodeVIN;
    vehicleVariableList?: IVehicleVariableList;
    searchedVIN?: string;
    searchVIN?: string;
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
                    ...action.decodeVIN,
                }
            };
            case VINActions.SET__VEHICLE_VARIABLE_LIST:
            return {
                ...prevState,
                vehicleVariableList: {
                    ...prevState.setVehicleVariableList,
                    ...action.vehicleVariableList,
                }
            };
        case VINActions.SET_SEARCH_VIN:
            return {
                ...prevState,
                searchVIN: action.searchVIN,
            };
        case VINActions.ADD_SEARCHED_VIN:
            return {
                ...prevState,
                searchedVINList: [
                    action.searchedVIN,
                    ...prevState.searchedVINList,
                ],
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

        setSearchVIN: (searchVIN: string) => dispatch({ type: VINActions.SET_SEARCH_VIN, searchVIN }),

        setDecodeVIN: (decodeVIN: IDecodeVIN) => dispatch({ type: VINActions.SET_DECODE_VIN, decodeVIN }),

        setVehicleVariableList: (vehicleVariableList: IVehicleVariableList) => dispatch({ type: VINActions.SET__VEHICLE_VARIABLE_LIST, vehicleVariableList }),

        addSearchedVIN: (searchedVIN: string) => dispatch({ type: VINActions.ADD_SEARCHED_VIN, searchedVIN }),

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
