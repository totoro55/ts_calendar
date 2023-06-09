import React, {FC} from "react";

interface iconProps {
    w?: string
    h?: string
}

export const DoubleLeftChevron:FC<iconProps> = ({w,h}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor"
                 className={`
                 ${w ? 'w-'+w : 'w-6'} 
                 ${h ? 'h-'+h : 'h-6'} 
                 `}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"/>
            </svg>
        </>
    )
}

export const DoubleRightChevron:FC<iconProps> = ({w, h}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor"
                 className={`
                 ${w ? 'w-'+w : 'w-6'} 
                 ${h ? 'h-'+h : 'h-6'} 
                 `}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
            </svg>
        </>
    )
}

export const LeftChevron:FC<iconProps> = ({w,h}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor"
                 className={`
                 ${w ? 'w-'+w : 'w-6'} 
                 ${h ? 'h-'+h : 'h-6'} 
                 `}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
        </>
    )
}

export const RightChevron:FC<iconProps> = ({w,h}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor"
                 className={`
                 ${w ? 'w-'+w : 'w-6'} 
                 ${h ? 'h-'+h : 'h-6'} 
                 `}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>

        </>
    )
}

export const LightBulbOn:FC<iconProps> = ({w,h}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className={`
                 ${w ? 'w-'+w : 'w-6'} 
                 ${h ? 'h-'+h : 'h-6'} 
                 `}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
            </svg>
        </>
    )
}

export const LightBulbOff:FC<iconProps> = ({w,h}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`
                 ${w ? 'w-'+w : 'w-6'} 
                 ${h ? 'h-'+h : 'h-6'} 
                 `}>
                <path
                    d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z"/>
                <path fillRule="evenodd"
                      d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                      clipRule="evenodd"/>
            </svg>

        </>
    )
}

