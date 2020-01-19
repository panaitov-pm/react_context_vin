import useAxios from '@use-hooks/axios';
import { urlConfig } from '../System/Config';

const useQueryVehicleVariableList = () => {

    const { response, reFetch, error, loading } = useAxios({
        url: `${urlConfig.api.url}/vehicles/getvehiclevariablelist?format=json`,
        method: 'GET',
    });

    return {
        response,
        error,
        loading,
        queryVehicleVariableList: reFetch
    };
};

export default useQueryVehicleVariableList;
