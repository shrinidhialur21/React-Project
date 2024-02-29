// import "../components/hstyle.css"
import { Link } from "react-router-dom"
import "../components/Dashboard.css"


const Dashboard = () => {

return (
    <div className="intro">
        <>
        {/* <h1>Hello there</h1> */}
        {/* <img className="Himage"   src='https://revolutionized.com/wp-content/uploads/sites/5/2022/05/rocket-launch-at-sunset.jpg' alt="ri"/> */}
        <div className="content1">
    <p>
          "Discover the thrill of space travel with Stellar Launcher! Book your seat on a rocket and journey to the stars. Elevate your travel experience and explore the wonders of the universe. Your ticket to space adventure is just a click away. Join us as we make your dream of space travel a reality!"
        </p>
        <form>
          {/* <input type="text" placeholder="Country Name" /> */}
          <button  className="btn">
            <Link  style={{textDecoration: 'none', color :'Black'}}  to={'/Rocket'}>Book Now!</Link>
          </button>
        </form>

    </div>

        </>
    </div>
)
}

export default Dashboard


