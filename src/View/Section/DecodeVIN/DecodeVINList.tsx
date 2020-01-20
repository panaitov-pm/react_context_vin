import React from 'react';
import withVIN from '../../../Context/VIN/withVIN';
import { IDecodeVINResult } from '../../../Types/VIN/DecodeVIN';
import Fade from '../../Module/Animation/Fade';

/**
 * @interface Props
 */
interface Props {
    isLoadingDecodeVIN: boolean;
}

const DecodeVINList: React.FC<Props> = withVIN(({ isLoadingDecodeVIN, decodeVIN }): any => {

    if (isLoadingDecodeVIN) return <h1>Loading....</h1>;

    if (decodeVIN.Results.length === 0) return null;

    return (
        <ol className="decode-list">
            <Fade delay={0} className="fade">
                <li className="decode-list__item fade">
                    <span>#</span>
                    <span>Variable</span>
                    <span>Value</span>
                </li>
            </Fade>
            {
                decodeVIN.Results.map((result: IDecodeVINResult, index: number) => (
                    <Fade delay={index * 10} className="fade-down">
                        <li key={result.VariableId} className="decode-list__item fade-down">
                            <span>{index + 1}</span>
                            <span>{result.Variable}</span>
                            <span>{result.Value}</span>
                        </li>
                    </Fade>
                ))
            }
        </ol>
    );
});

export default DecodeVINList;
