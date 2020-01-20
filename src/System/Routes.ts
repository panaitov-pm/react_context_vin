import Home from '../View/Page/Home';
import VariableList from '../View/Page/VariableList';
import Variable from '../View/Page/Variable';
import { urlConfig } from './Config';

export interface IPageRoute {
    exact: boolean,
    path: string,
    component: any,
    title: string,
}

const PageRoutes: IPageRoute[] = [
    {
        exact: true,
        path: '/',
        component: Home,
        title: 'Home',
    },
    {
        exact: true,
        path: `/${urlConfig.variables.url}`,
        component: VariableList,
        title: 'Variables',
    },
    {
        exact: false,
        path: `/${urlConfig.variables.url}/:variableId`,
        component: Variable,
        title: 'Variable',
    }
];

export default PageRoutes
