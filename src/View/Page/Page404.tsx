import React from 'react';
import Fade from '../Module/Animation/Fade';

/**
 * @interface Props
 */
interface Props {
    title?: string,
}

const Page404: React.FC<Props> = ({ title = 'Page not found' }) => {
    return (
        <>
            <Fade delay={0} className="fade-up">
                <h1 className="fade-up">{title}</h1>
            </Fade>
            <Fade delay={100} className="fade-up">
                <a className="variable__link-error fade-up" href="/">Back to home</a>
            </Fade>
        </>
    );
};

export default Page404;
