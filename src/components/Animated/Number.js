import React from 'react';
import { useSpring, animated } from 'react-spring';

const Number = ({ n }) => {
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    })
    
    // const { number } = useSpring({
    //     from: { number: 0 },
    //     number: n,
    //     delay: 200,
    //     config: { mass: 1, tension: 10, friction: 5 }
    // })
    
    return (
        <animated.div>{springs.to((n) => n.toFixed(0))}</animated.div>
    );
};

export default Number;