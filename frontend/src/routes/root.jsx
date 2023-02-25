import { Outlet, Link } from "react-router-dom";
import "../index.css";

//import Test from "./check/check";

export default function Root() {

  const disease = ['Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis', 'Drug Reaction', 'Peptic ulcer diseae', 'AIDS', 'Diabetes ', 'Gastroenteritis', 'Bronchial Asthma', 'Hypertension ', 'Migraine', 'Cervical spondylosis', 'Paralysis (brain hemorrhage)', 'Jaundice', 'Malaria', 'Chicken pox', 'Dengue', 'Typhoid', 'hepatitis A', 'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E', 'Alcoholic hepatitis', 'Tuberculosis', 'Common Cold', 'Pneumonia', 'Dimorphic hemmorhoids(piles)', 'Heart attack', 'Varicose veins', 'Hypothyroidism', 'Hypoglycemia', 'Osteoarthristis', 'Arthritis', '(vertigo) Paroymsal  Positional Vertigo', 'Acne', 'Urinary tract infection', 'Psoriasis', 'Impetigo'];
  const renderList = disease.map((item) =>
           <li><Link  to={`disease/`+item}>{item}</Link></li>);

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