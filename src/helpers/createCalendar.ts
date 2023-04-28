import {ICalendar} from "../types/ICalendar";

export const createCalendar = (year: number, month: number): Date[] => {
    const firstDayOfMonth: Date = new Date(year, month, 1)
    const lastDayOfMonth: Date = new Date(year, month + 1, 0)

    let calendar:Date[] = []
    if (firstDayOfMonth.getUTCDay() !== 0) {
        for (let i = 0; i < firstDayOfMonth.getUTCDay(); i++) {
            calendar.unshift(new Date(year, month, -i))
        }
    } else {
        for (let i = 0; i < 7; i++) {
            calendar.unshift(new Date(year, month, -i))
        }
    }
    for (let i = 0; i < lastDayOfMonth.getDate(); i++) {
        calendar.push(new Date(year, month, i + 1))
    }
    if (lastDayOfMonth.getUTCDay() !== 6) {
        for (let i = 0; i < 6 - lastDayOfMonth.getUTCDay(); i++) {
            calendar.push(new Date(year, month + 1, i + 1))
        }
    } else {
        for (let i = 0; i < 7; i++) {
            calendar.push(new Date(year, month + 1, i + 1))
        }
    }
    if (calendar.length <= 35) {
        const length:number = calendar.length
        for (let i = length; i < length + 7; i++) {
            calendar.push(new Date(year, month + 1, calendar[calendar.length - 1].getDate() + 1))
        }
    }

    return calendar

}

export const createDifferentCalendar = (year:number, month:number, value:number):ICalendar=>{
    let calendarObj:ICalendar = {
        calendar:[],
        year:0,
        month:0
    }

    if (month + value < 0) {
        calendarObj = {...calendarObj, month: 11, year: year -1}
    } else if (month+value>11){
        calendarObj = {...calendarObj, month: 0, year: year -1}
    } else {
        calendarObj = {...calendarObj, month: month+value, year: year}
    }

    calendarObj = {...calendarObj, calendar: createCalendar(calendarObj.year, calendarObj.month)}

    return calendarObj

}