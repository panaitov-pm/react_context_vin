import React from 'react';
import SearchForm from '../Section/SearchForm/SearchForm';

/**
 * @interface Props
 */
interface Props {

}

const Home: React.FC<Props> = ({}): any => {
    return (
        <main className="main">
            <aside className="sidebar">
                sidebar
            </aside>
            <section className="form-wrap">
                <SearchForm />
            </section>
        </main>
    );
};

export default Home;
