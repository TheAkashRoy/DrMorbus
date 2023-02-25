import { Outlet, Link } from "react-router-dom";
import "../index.css";

//import Test from "./check/check";

export default function Root() {

  const cars = ["Saab", "Volvo", "BMW","Saab", "Volvo", "BMW","Saab", "Volvo", "BMW","Saab", "Volvo", "BMW","Saab", "Volvo", "BMW"];
  const renderList = cars.map((item) =>
           <li><Link  to={`disease/`+1}>{item}</Link></li>);

  

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form method="post" className="center container">
              
              <Link to={'/test'}><button type="submit">Take your test now</button></Link>
            </form>
          </div >
          <nav>
            <ul>
              {renderList}
            </ul>
          </nav>
        </div>
        <Outlet />
        {/* <div id="detail"></div> */}
      </>
    );
    }