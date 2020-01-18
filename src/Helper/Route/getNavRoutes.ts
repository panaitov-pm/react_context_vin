import { IPageRoute } from '../../System/Routes';

const getNavRoutes = (routes: IPageRoute[], navItems: string[]): IPageRoute[] => {
    const navItemsLowerCase = navItems.map(navItem => navItem.toLowerCase());

    return routes.filter(route => navItemsLowerCase.includes(route.component.name.toLowerCase()));
};

export default getNavRoutes;
