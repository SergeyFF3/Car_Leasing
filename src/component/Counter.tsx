import React from 'react';
import cls from './test.module.scss'

const Counter = () => {

   const [count, setCount] = React.useState(0)



    return (
        <div >
            {count}
            <button className={cls.test} onClick={() => setCount(count + 1)}>inc</button>
            <button className={cls.test} onClick={() => setCount(count - 1)}>dec</button>
        </div>
    );
};

export default React.memo(Counter);