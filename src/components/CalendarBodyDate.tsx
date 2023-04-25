import React, {FC} from 'react';

interface CalendarBodyDateProps {
    day: Date
    year: number
    month: number
    today?: Date | null
}

const CalendarBodyDate: FC<CalendarBodyDateProps> = ({day, year, today, month}) => {

    const isToday = (): boolean => {
        if (today) {
            return day.getDate() === today.getDate() &&
                day.getMonth() === today.getMonth() &&
                day.getFullYear() === today.getFullYear()
        }
        return false
    }
    const isCurrentMonth = (): boolean => day.getMonth() === month

    const isDayOff = (): boolean => day.getUTCDay() >= 5

    return (
        <div onClick={() => console.log(day === today)}
             className={`flex cursor-default
             border-r border-b border-slate-300 dark:border-slate-400
             ${isDayOff()
                 ? 'bg-indigo-100 dark:bg-indigo-700'
                 : 'bg-slate-100 dark:bg-slate-500'} 
             transition-all duration-300`}>
            <p className={`m-2 group-hover: w-full text-right text-sm md:text-lg lg:text-2xl
                ${isCurrentMonth() && !isDayOff() ? 'text-slate-600 dark:text-slate-200' : ''} 
                ${!isCurrentMonth() ? 'text-slate-400 dark:text-indigo-300' : ''} 
                ${isCurrentMonth() && isDayOff() ? 'text-indigo-700 dark:text-white' : ''} 
                transition-all duration-300`}>
                {isToday()
                    ?
                    <span
                        className={` -m-1.5 p-2 rounded-full text-slate-100 dark:text-indigo-700
                        ${isCurrentMonth() ? 'bg-indigo-500 dark:bg-indigo-100' : 'bg-indigo-300 dark:bg-indigo-200'}
                        transition-all duration-300`}>
                        {day.getDate()}
                    </span>
                    :
                    day.getDate()
                }

            </p>
        </div>
    );
};

export default CalendarBodyDate;