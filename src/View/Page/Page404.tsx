import React from 'react';
import Fade from '../Module/Animation/Fade';

/**
 * @interface Props
 */
interface Props {

}

const Page404: React.FC<Props> = () => {
    return (
        <>
            <Fade delay={0} className="fade-up">
                <h1 className="fade-up">Page not found</h1>
            </Fade>
            <Fade delay={100} className="fade-up">
                <a className="fade-up" href="/">Back to home</a>
            </Fade>
        </>
    );
};

export default Page404;
