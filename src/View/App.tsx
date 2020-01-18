import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page404 from './Page/Page404';
import PageNavigation from './Section/PageNavigation';
import PageRoutes, { IPageRoute } from '../System/Routes';
import VINStore from '../Context/VIN/VINStore';

/**
 * @interface Props
 */
interface Props {

}

const App: React.FC<Props> = (): any => {
    return (
        <>
            <header className="header">
                <PageNavigation />
            </header>
            <VINStore
                getDefaultProps={() => ({})}
            >
                <div className="container">
                    <Switch>
                        {
                            PageRoutes.map((route: IPageRoute, index: number) => (
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    path={route.path}
                                    render={props => <route.component {...props} />}
                                />
                            ))
                        }
                        <Route component={Page404} />
                    </Switch>
                </div>
            </VINStore>

        </>
    );
};

export default App;

