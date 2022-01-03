import dayjs from 'dayjs';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { getMonth } from '../utility';
import logocalendar from './assets/logocalendar.jpg'

export default function CalendarHeader() {
    const {monthIndex, setMonthIndex,setWeekIndex,weekIndex} = useContext(GlobalContext)
    console.log(dayjs().format('DD'));
   

    function handlePrevMonth() {
        setMonthIndex((monthIndex - 1))
    }
    
    function handleNextMonth() {
        setMonthIndex((monthIndex + 1))
        // setWeekIndex(weekIndex + 7)
    }
    function handleCurrentMonth() {
        setMonthIndex(dayjs().month())   
    }
    return (
        <header className='headerContainerMain' >
        <img src={logocalendar} alt="" srcset="" className='logoImage' />
            <h1 className="calendarHeading">Calendar</h1>
            <button className="todayBtn" onClick={handleCurrentMonth} >Today</button>
            <div className='monthAdjustBtn' >
            <span className="monthBtn" onClick={handlePrevMonth} ><i className="fas fa-chevron-left"></i></span>
            <span className="monthBtn" onClick={handleNextMonth} ><i className="fas fa-chevron-right"></i></span>
            </div>
            <div className="currentMonth"><h2>
            {
                dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')
            }
            </h2></div>
        </header>
    )
}
