import React, {useState} from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';
export default function ContextWrapper(props) {
    const[monthIndex, setMonthIndex] = useState(dayjs().month())
    const [weekIndex,setWeekIndex] = useState(dayjs().format('DD'))
    return (
        <GlobalContext.Provider value={{monthIndex,setMonthIndex,weekIndex,setWeekIndex}} >
        {props.children}
        </GlobalContext.Provider>
    )
}
