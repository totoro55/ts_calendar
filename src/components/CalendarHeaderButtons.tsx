import React, {FC} from 'react';
import HeaderButton from "../UI/HeaderButton";
import {LeftChevron, RightChevron, DoubleRightChevron, DoubleLeftChevron} from '../constants/icons'

interface CalendarHeaderButtonsProps {
    onYearChange: (value: number) => void
    onMonthChange: (value: number) => void
    moveToToday: () => void
}

const CalendarHeaderButtons: FC<CalendarHeaderButtonsProps> = (
    {
        onMonthChange,
        onYearChange,
        moveToToday
    }) => {

    const handleYearForward = (): void => onYearChange(1)
    const handleYearBackward = (): void => onYearChange(-1)
    const handleMonthForward = (): void => onMonthChange(1)
    const handleMonthBackward = (): void => onMonthChange(-1)
    const handleMoveToToday = (): void => moveToToday()

    return (
        <div className='flex flex-col gap-3'>
            <HeaderButton onClick={handleMoveToToday}>
                today
            </HeaderButton>
            <div className='flex w-full md:w-fit h-full items-end gap-3 justify-around md:justify-end'>
                <HeaderButton onClick={handleYearBackward}>
                    <DoubleLeftChevron />
                </HeaderButton>
                <HeaderButton onClick={handleMonthBackward}>
                    <LeftChevron />
                </HeaderButton>
                <HeaderButton onClick={handleMonthForward}>
                    <RightChevron />
                </HeaderButton>
                <HeaderButton onClick={handleYearForward}>
                    <DoubleRightChevron />
                </HeaderButton>
            </div>
        </div>

    );
};

export default CalendarHeaderButtons;