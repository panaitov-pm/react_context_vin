import { createContext } from 'react';
import IDecodeVIN from '../../Types/VIN/DecodeVIN';

/**
 * @interface VINContextProps
 */
export interface VINContextProps {
    decodeVIN: IDecodeVIN;
    setDecodeVIN: (decodeVIN: IDecodeVIN) => void;
}

export const initialDecodeVIN = {
    Message: '',
    SearchCriteria: '',
    Results: []
};

/**
 * @type {React.Context<VINContextProps>}
 */
const VINContext = createContext<VINContextProps>({
    decodeVIN: initialDecodeVIN,
    setDecodeVIN: (decodeVIN: IDecodeVIN) => {
    },
});

export default VINContext;
