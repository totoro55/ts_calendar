import React, {FC} from 'react';
import {monthNames} from "../constants/date";
import CalendarHeaderButtons from "./CalendarHeaderButtons";

interface CalendarHeaderProps {
    year: number
    month: number
    onYearChange: (value: number) => void
    onMonthChange: (value: number) => void
    moveToToday: () => void
}

const CalendarHeader: FC<CalendarHeaderProps> = (
    {
        year,
        month,
        onMonthChange,
        onYearChange,
        moveToToday,
    }) => {


    return (

        <div className='flex w-full flex-col-reverse md:flex-row items-center justify-between border-b-2
        border-indigo-700 dark:border-indigo-300 pb-3 md:pb-6'>
            <CalendarHeaderButtons
                onMonthChange={onMonthChange}
                onYearChange={onYearChange}
                moveToToday={moveToToday}
            />
            <div className='flex mb-3 md:mb-0 md:w-1/3 items-center md:items-end justify-center md:justify-end flex-col cursor-default'>
                <h2 className='text-2xl md:text-4xl tracking-wider text-indigo-700 dark:text-indigo-200
            transition-all duration-300
            '>
                    {monthNames[month]}
                </h2>
                <h2 className='text-3xl md:text-5xl tracking-wider font-bold text-indigo-500 dark:text-indigo-100
            transition-all duration-300
            '>
                    {year}
                </h2>
            </div>
        </div>

    );
};

export default CalendarHeader;