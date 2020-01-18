import useAxios from '@use-hooks/axios';
import { urlConfig } from '../System/Config';
import getDecodeVIN from '../Helper/SearchForm/getDecodeVIN';

const useQueryDecodeVIN = (vin: string) => {

    const { response, reFetch, error, loading } = useAxios({
        url: `${urlConfig.api.url}/vehicles/decodevin/${vin}?format=json`,
        method: 'GET',
    });

    return {
        response,
        error,
        loading,
        decodeVIN: getDecodeVIN(response),
        queryDecodeVIN: reFetch
    };
};

export default useQueryDecodeVIN;
