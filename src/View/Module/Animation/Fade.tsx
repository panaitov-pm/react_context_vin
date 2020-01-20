import React from 'react';
import { useEffect, useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

/**
 * @interface Props
 */
interface Props {
    delay: number
    className: string
}

const Fade: React.FC<Props> = ({ children, delay, className }) => {
    const [showNode, setShowNode] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setShowNode(true);
        }, delay);

        return () => setShowNode(false);
    }, []);

    return (
        <CSSTransition
            in={showNode}
            timeout={500}
            classNames={className}
        >
            {children}
        </CSSTransition>
    );
};

export default Fade;
