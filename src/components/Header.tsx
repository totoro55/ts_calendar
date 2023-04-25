import React, {useEffect, useState} from 'react';
import {LightBulbOff, LightBulbOn} from "../constants/icons";

const Header = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false)

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },[darkTheme])

    const handleSwitchTheme = (): void => {
        setDarkTheme(!darkTheme)
        console.log(darkTheme)
    }

    return (
        <div className='w-full flex items-center justify-end'>
            <div className='h-12 md:h-fit w-fit flex items-center justify-end
            rounded-xl drop-shadow-2xl px-3 py-3 md:py-4 md:px-4 bg-slate-100 dark:bg-slate-500'>
                <div
                    onClick={handleSwitchTheme}
                    className='flex items-center justify-center lg:mr-3 p-1 lg:p-3 rounded-full
                bg-indigo-400 text-indigo-800 dark:bg-yellow-300
                transition-all duration-300'>
                    {
                        darkTheme
                            ? <LightBulbOn />
                            : <LightBulbOff />
                    }
                </div>
                <div className={`w-24 hidden h-12 p-1 lg:flex justify-center
                    relative rounded-3xl 
                     ${darkTheme ? 'bg-yellow-300' : 'bg-indigo-400'}
                    transition-all duration-300`}>
                    <input
                        className='hidden'
                        checked={darkTheme}
                        onChange={handleSwitchTheme}
                        id='theme' type='checkbox'/>
                    <label
                        className={`absolute top-2  bg-indigo-800 dark:bg-yellow-600 md:p-4 rounded-full
                        ${darkTheme ? 'left-14' : 'left-2 '}
                        transition-all duration-300`}
                        htmlFor='theme'>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;