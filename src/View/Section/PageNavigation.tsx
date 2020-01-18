import React from 'react';
import { NavLink } from 'react-router-dom';
import getNavRoutes from '../../Helper/Route/getNavRoutes';
import PageRoutes, { IPageRoute } from '../../System/Routes';

/**
 * @interface Props
 */
interface Props {

}

const PageNavigation: React.FC<Props> = ({}): any => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {
                    getNavRoutes(PageRoutes, ['home', 'variableList']).map((route: IPageRoute, index: number) => (
                        <li
                            key={index}
                            className="navbar-list__item"
                        >
                            <NavLink
                                exact={route.exact}
                                to={route.path}
                                className="navbar-list__link"
                            >
                                {route.title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default PageNavigation;
