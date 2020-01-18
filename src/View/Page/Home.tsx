import React, { useState } from 'react';
import SearchForm from '../Section/SearchForm/SearchForm';
import DecodeVINList from '../Section/DecodeVIN/DecodeVINList';

/**
 * @interface Props
 */
interface Props {

}

const Home: React.FC<Props> = ({}): any => {

    const [isLoadingDecodeVIN, setIsLoadingDecodeVIN] = useState(false);

    return (
        <main className="main">
            <aside className="sidebar">
                sidebar
            </aside>
            <section className="decode-info">
                <SearchForm
                    setIsLoadingDecodeVIN={setIsLoadingDecodeVIN}
                />
                <DecodeVINList
                    isLoadingDecodeVIN={isLoadingDecodeVIN}
                />
            </section>
        </main>
    );
};

export default Home;
