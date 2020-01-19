import React, { useEffect } from 'react';
import withVIN from '../../Context/VIN/withVIN';
import useQueryVehicleVariableList from '../../Hook/useQueryVehicleVariableList';
import getDescription from '../../Helper/VariableList/getDescription';

/**
 * @interface Props
 */
interface Props {

}

const VariableList: React.FC<Props> = withVIN(({ vehicleVariableList, setVehicleVariableList }) => {

    const { response, error, loading, queryVehicleVariableList } = useQueryVehicleVariableList();

    useEffect(() => {
        queryVehicleVariableList();
    }, []);

    useEffect(() => {
        response?.data?.Results && setVehicleVariableList(response.data);
    }, [response?.data?.Results]);

    if (loading) return <h1>Loading...</h1>;

    if (error) return <h1>Something went wrong</h1>;

    return (
        <section className="variable-info">
            <h1>Vehicle Variables</h1>
            <ol className="variable-list">
                <li className="variable-list__item">
                    <span className="variable-list__index">#</span>
                    <span className="variable-list__name">Name</span>
                    <span className="variable-list__desc">Description</span>
                </li>
                {
                    vehicleVariableList.Results && (
                        vehicleVariableList.Results.map((variable, index: number) => {

                            if (!getDescription(variable)) return null;

                            return (
                            <li
                                key={variable.ID}
                                className="variable-list__item"
                            >
                                <a href="/" className="variable-list__link">
                                    <span className="variable-list__index">{index + 1}</span>
                                    <span className="variable-list__name">{variable.Name}</span>
                                    <div className="variable-list__desc">{getDescription(variable)}</div>
                                </a>
                            </li>
                        )})
                    )
                }
            </ol>
        </section>
    );
});

export default VariableList;
