import './dashboard.styles.scss'; 
import img from "../../img/daenerys.jpeg" ;

const Dashboard = () => {
    return (
        <div>
            <div className="poster">
                <img className="motivation-img" src={img}  />
                <h1>That Special Moment</h1>
                <p>When you find the perfect avocado at the supermarket</p>
        </div>
        </div>
       
    )
}

export default Dashboard; 