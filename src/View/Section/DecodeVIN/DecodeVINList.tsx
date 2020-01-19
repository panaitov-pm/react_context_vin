import * as React from 'react';
import withVIN from '../../../Context/VIN/withVIN';
import { IDecodeVINResult } from '../../../Types/VIN/DecodeVIN';

/**
 * @interface Props
 */
interface Props {
    isLoadingDecodeVIN: boolean;
}

const DecodeVINList: React.FC<Props> = withVIN(({ isLoadingDecodeVIN, decodeVIN }): any => {

    if (isLoadingDecodeVIN) return 'Loading....';

    if (decodeVIN.Results.length === 0) return null;

    return (
        <ol className="decode-list">
            <li className="decode-list__item">
                <span>#</span>
                <span>Variable</span>
                <span>Value</span>
            </li>
            {
                decodeVIN.Results.map((result: IDecodeVINResult, index: number) => (
                    <li key={result.VariableId} className="decode-list__item">
                            <span>{index + 1}</span>
                            <span>{result.Variable}</span>
                            <span>{result.Value}</span>
                    </li>
                ))
            }
        </ol>
    );
});

export default DecodeVINList;
