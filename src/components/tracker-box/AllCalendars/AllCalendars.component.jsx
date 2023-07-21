import MonthlyDisplay from "../MonthlyDisplay/MonthlyDisplay.component";
import "./all-calendars.styles.css"; 

const AllCalendars = () => {
    return(
        <>
        <div className="calendar-container">
            <MonthlyDisplay />
            <MonthlyDisplay />
            <MonthlyDisplay />
            <MonthlyDisplay />
        </div>
       
        </>
    )
}

export default AllCalendars;