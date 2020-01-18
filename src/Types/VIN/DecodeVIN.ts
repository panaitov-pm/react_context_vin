/**
 * @interface IDecodeVIN
 */
export default interface IDecodeVIN {
    Message: string;
    SearchCriteria: string | null;
    Results: IDecodeVINResult[];
}

 export interface IDecodeVINResult {
    Value: string | null,
    ValueId: string,
    Variable: string,
    VariableId: number
}
