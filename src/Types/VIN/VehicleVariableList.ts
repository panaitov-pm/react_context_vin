/**
 * @interface IVehicleVariableList
 */
export default interface IVehicleVariableList {
    Message: string;
    SearchCriteria: string | null;
    Results: IVehicleVariableListResult[];
}

 export interface IVehicleVariableListResult {
     DataType: string,
     Description: string,
     ID: number,
     Name: string,
}
