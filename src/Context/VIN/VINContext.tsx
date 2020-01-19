import { createContext } from 'react';
import IDecodeVIN from '../../Types/VIN/DecodeVIN';

/**
 * @interface VINContextProps
 */
export interface VINContextProps {
    searchVIN: string;
    setSearchVIN: (searchVIN: string) => void;

    decodeVIN: IDecodeVIN;
    setDecodeVIN: (decodeVIN: IDecodeVIN) => void;

    searchedVINList: string[],
    addSearchedVIN: (searchedVIN: string) => void;
}

export const initialDecodeVIN = {
    Message: '',
    SearchCriteria: '',
    Results: [],
};

/**
 * @type {React.Context<VINContextProps>}
 */
const VINContext = createContext<VINContextProps>({
    searchVIN: '',
    setSearchVIN: (searchVIN: string) => {
    },

    decodeVIN: initialDecodeVIN,
    setDecodeVIN: (decodeVIN: IDecodeVIN) => {
    },

    searchedVINList: [],
    addSearchedVIN: (searchedVIN: string) => {
    },
});

export default VINContext;
