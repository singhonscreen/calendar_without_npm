import React from "react";

const GlobalContext = React.createContext({
    monthIndex : 0,
    setMonthIndex: (index)=>{},
    weekIndex:0,
    setWeekIndex:()=>{}
})
 export default GlobalContext;