import {useState} from 'react';
import Calendar from 'react-calendar'; 

const UserPage = () => {
    const [date, setDate] = useState(new Date()); 
    return (
        <div>
            this is the user page 
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="text-center">
                Selected date: {date.toDateString()}
            </div>
        </div>
    )
}; 

export default UserPage; 
