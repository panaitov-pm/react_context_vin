import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page404 from './Page/Page404';
import PageNavigation from './Section/PageNavigation';
import PageRoutes, { IPageRoute } from '../System/Routes';

/**
 * @interface Props
 */
interface Props {

}

const App: React.FC<Props> = ({}): any => {
    return (
        <div className="container">
            <PageNavigation />
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
    );
};

export default App;

