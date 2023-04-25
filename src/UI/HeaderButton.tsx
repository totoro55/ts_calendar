import React, {FC, ReactNode} from 'react';

interface HeaderButtonProps{
    children?: ReactNode,
    onClick?: ()=> void
}
const HeaderButton:FC<HeaderButtonProps> = ({onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className='bg-indigo-200 border-transparent border-2 rounded-lg px-1 py-1
        text-indigo-700 flex items-center justify-center text-md md:text-lg font-bold
        dark:bg-indigo-700 dark:text-slate-100 dark:hover:bg-indigo-200 dark:hover:text-indigo-700
        hover:bg-indigo-700 hover:text-slate-100 tracking-wider
        transition-all duration-300
        '>
            {children}
        </button>
    );
};

export default HeaderButton;