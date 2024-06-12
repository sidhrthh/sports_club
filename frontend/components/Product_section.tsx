import React from 'react';
import TimerCount from './TimerCount';

// interface ProductsProps {
//   title: string;
// }

export default function TitleComponent() {
    return (
        <>
            <div className='p-20'>

                <div className='flex'>
                    <div className='h-[35px] w-[3px] border-2 border-[#DB4444]'></div>
                    <h1 className='text-[#DB4444] text-2xl ml-4'>  Today's</h1>
                </div>

                <div className='flex font-bold text-xl mt-4'>
                    <p>Flash Sales</p>
                    <TimerCount />
                </div>

                <div>

                </div>

            </div>
        </>
    );
}
