import IDecodeVIN, { IDecodeVINResult } from '../../Types/VIN/DecodeVIN';
import { initialDecodeVIN } from '../../Context/VIN/VINContext';
import isEmpty from '../String/isEmpty';

/**
 * @param response
 * @return {IDecodeVIN | {}}
 */
const getDecodeVIN = (response: any): IDecodeVIN => {
    if (!response) return initialDecodeVIN;

    const { data } = response;
    const { Message, SearchCriteria, Results } = data as IDecodeVIN;

    return {
        Message,
        SearchCriteria,
        Results: Results ? Results.filter((result: IDecodeVINResult) => !isEmpty(result.Value)) : [],
    };

};

export default getDecodeVIN;
