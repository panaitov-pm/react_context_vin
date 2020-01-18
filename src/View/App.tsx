import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import VariableList from './Pages/VariableList';
import Variable from './Pages/Variable';
import Page404 from './Pages/Page404';

/**
 * @interface Props
 */
interface Props {

}

const App: React.FC<Props> = ({}): any => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/variables" component={VariableList} />
                <Route path="/variables/:variableId" component={Variable} />
                <Route component={Page404} />
            </Switch>
        </div>
    );
};

export default App;

