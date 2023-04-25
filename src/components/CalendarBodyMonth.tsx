import React, {FC} from 'react';
import CalendarBodyDate from "./CalendarBodyDate";

interface CalendarBodyMonthProps {
    calendar: Array<Date>
    year: number
    month: number
    today?: Date|null

}

const CalendarBodyMonth: FC<CalendarBodyMonthProps> = (
    {
        calendar,
        year,
        month,
        today
    }) => {
    return (
        <div className='w-full h-full border-l scroll-smooth
        border-t border-slate-300 dark:border-slate-400 grid grid-cols-7 grid-rows-6'>
            {calendar.map((day, i) => {
                return (
                    <CalendarBodyDate
                        key={day.toString()}
                        day={day}
                        year={year}
                        month={month}
                        today={today}/>
                )
            })}
        </div>
    );
};

export default CalendarBodyMonth;