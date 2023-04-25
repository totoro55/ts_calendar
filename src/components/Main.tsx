import React, {FC, ReactNode} from 'react';
import Calendar from "./Calendar";
import Header from "./Header";

interface MainProps {
    children?: ReactNode
}

const Main: FC<MainProps> = ({children}) => {
    return (
        <div className='container gap-6 md:gap-12 h-full py-4 md:py-0 px-4 xl:px-0 flex flex-col items-center justify-center'>
            <Header />
            <Calendar/>
        </div>
    );
};

export default Main;