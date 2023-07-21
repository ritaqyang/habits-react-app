import { WeeklyTracker } from "../WeeklyTracker/WeeklyTracker.component";
import "./monthly-display.styles.css"; 

const MonthlyDisplay = () => {
    return(
        <>
        
        <div className="month-container">
            <h4>Working out</h4>
            <WeeklyTracker />
            <WeeklyTracker />
            <WeeklyTracker />
            <WeeklyTracker />
        </div>
       
    
        </>
    )
}; 


export default MonthlyDisplay; 
