import HTMLReactParser from 'html-react-parser';

const getDescription = (variable) => {
    if (!variable) return '';

    const {Description} = variable;
    const desc = Description ? HTMLReactParser(Description) : null;

    return desc !== 'Error Text' && desc;
};

export default getDescription;

