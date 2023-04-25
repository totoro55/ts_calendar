import React, {useEffect, useState} from 'react';
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";


const Calendar = () => {

    const [today, setToday] = useState<Date>(new Date())
    const [month, setMonth] = useState<number>(0)
    const [year, setYear] = useState<number>(0)

    useEffect(() => {
        const today: Date = new Date()
        setToday(today)
        setYear(today.getFullYear())
        setMonth(today.getMonth())
    }, [])

    const moveToToday = (): void => {
        setYear(today.getFullYear())
        setMonth(today.getMonth())
    }
    const monthChange = (value: number): void => {
        if (month <= 1 && value < 0) {
            setMonth(11)
            setYear(year - 1)
            return
        }
        if (month >= 11 && value > 0) {
            setMonth(0)
            setYear(year + 1)
            return
        }
        setMonth(month + value)
    }

    const yearChange = (value: number): void => {
        if (year + value > (new Date().getFullYear() + 200) ||
            year - value < (new Date().getFullYear() - 200)) {
            return
        }
        setYear(year + value)
    }

    return (
        <div className=' w-full h-5/6 xl:h-4/5 flex flex-col items-center
        bg-slate-100 dark:bg-slate-500 rounded-xl drop-shadow-2xl p-3 md:p-6'>
            <CalendarHeader
                year={year}
                month={month}
                onYearChange={yearChange}
                onMonthChange={monthChange}
                moveToToday={moveToToday}
            />
            <CalendarBody
                year={year}
                month={month}
                today={today}/>
        </div>
    );
};

export default Calendar;