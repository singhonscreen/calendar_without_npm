import React, {useState, useContext, useEffect} from 'react';
import { getMonth } from './utility'
import './App.css';
import CalendarHeader from './components/CalendarHeader';
import SideBar from './components/SideBar';
import GlobalContext from "./context/GlobalContext";
import Month from './components/Month';

function App() {
  const [ currentMonth, setCurrentMonth ] =useState(getMonth)
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
    <div className="mainContainer">
    <CalendarHeader />
    </div>
    <div className="calenderConatainer">
    <SideBar />
    <Month month = {currentMonth} />
    </div>
    </React.Fragment>
  );
}

export default App;
