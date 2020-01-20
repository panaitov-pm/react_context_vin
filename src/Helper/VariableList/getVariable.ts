import IVehicleVariableList, { IVehicleVariableListResult } from '../../Types/VIN/VehicleVariableList';

const getVariable = (vehicleVariableList: IVehicleVariableList, variableId: string): IVehicleVariableListResult | null => {
   if (!vehicleVariableList) return null;

   return vehicleVariableList.Results.filter(variable => variable.ID === +variableId)[0];
};

export default getVariable;

