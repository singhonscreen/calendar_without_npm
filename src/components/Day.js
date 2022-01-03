import  dayjs  from 'dayjs'
import React from 'react'

const Day = ({day, rowIdx}) => {
    function currentDayClass(){
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'activeCurrentDate' : ''
    }
    return (
        <div className='dayContainer'>
        <header className='headerContainer'>
        {rowIdx === 0 && (
            <p className='weekDay' >{day.format('ddd')}</p>
        )}
        <p className = {` DateContainer ${currentDayClass()} `} >
        {day.format('DD')}
        </p>
        <p>hiii</p>
        </header>
        </div>
    )
}

export default Day
