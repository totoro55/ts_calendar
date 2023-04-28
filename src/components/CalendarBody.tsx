import React, {FC} from 'react';
import {daysOfWeek} from "../constants/date";
import {createCalendar} from "../helpers/createCalendar";
import CalendarBodyMonth from "./CalendarBodyMonth";

interface CalendarBodyProps {
    year: number
    month: number
    today?: Date | null
}

const CalendarBody: FC<CalendarBodyProps> = (
    {
        year,
        month,
        today,
    }) => {

    const calendar:Date[] = createCalendar(year, month)

    return (
        <section className='flex h-full w-full flex-col pt-3 md:pt-6 overflow-hidden'>
            <div className='flex w-full pb-3 md:pb-6'>
                {daysOfWeek.map(day => {
                    return (
                        <div key={day}
                             className={` w-full text-right pr-2 border font-bold border-transparent text-sm md:text-lg lg:text-2xl
                             ${day === 'Сб' || day === 'Вс' ? 'text-indigo-700 dark:text-indigo-50' : 'text-slate-500 dark:text-indigo-200'}`}>
                            {day}
                        </div>
                    )})}
            </div>
            <div className='w-full h-full flex flex-col '>
                <CalendarBodyMonth
                    calendar={calendar}
                    year={year}
                    month={month}
                    today={today}
                />
            </div>
        </section>

    );
};

export default CalendarBody;