import PageRoutes from '../../System/Routes';
import getNavRoutes from './getNavRoutes';

describe('getNavRoutes', () => {
    it('should return array with Home component', () => {
        expect(getNavRoutes(PageRoutes, ['home'])).toEqual([PageRoutes[0]]);
    });

    it('should return array with Home, VariableList components', () => {
        expect(getNavRoutes(PageRoutes, ['home', 'variableList'])).toEqual([PageRoutes[0], PageRoutes[1]]);
    });

    it('should return empty array', () => {
        expect(getNavRoutes(PageRoutes, [])).toEqual([]);
    });
});
