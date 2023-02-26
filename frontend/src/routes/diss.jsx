import './diss.css';
import { useParams } from 'react-router-dom'
import Symptom from './disease/symptom';
import Precaution from './disease/precaution';
export default function Contact() {
  const { diseaseId } = useParams();
  console.log(diseaseId);
  // const disease = {
  //   name: "Fungal Infection",
  //   about:"Fungal infection, also known as mycosis, is a disease caused by fungi.[5][13] Different types are traditionally divided according to the part of the body affected; superficial, subcutaneous, and systemic.[3][6] Superficial fungal infections include common tinea of the skin, such as tinea of the body, groin, hands, feet and beard, and yeast infections such as pityriasis versicolor.[7] Subcutaneous types include eumycetoma and chromoblastomycosis, which generally affect tissues in and beneath the skin.[1][7] Systemic fungal infections are more serious and include cryptococcosis, histoplasmosis, pneumocystis pneumonia, aspergillosis and mucormycosis.[3] Signs and symptoms range widely.[3] There is usually a rash with superficial infection.[2] Fungal infection within the skin or under the skin may present with a lump and skin changes.[3] Pneumonia-like symptoms or meningitis may occur with a deeper or systemic infection.",
  //   symptoms : ["itching","skin_rash","nodal_skin_eruptions","dischromic","patches"],
  //   precautions : ["bath twice",	"use detol or neem in bathing water",	"keep infected area dry",	"use clean cloths"]
  // };

  // const precautionsRender = 
                
  //               Disease.precautions.map((item2) => 
  //               <li className="list">{item2}</li>);

  // const SymptomRender = 
                
  //         Disease.symptoms.map((item) => 
  //   <li className="list">{item}</li>);
  // console.log(getInfo())
  return (
    <>
      <div class="a1">
      <h1><div className="a4">Disease Info: </div></h1>
        <div className="container">
        
        <h2><div className="a3">Precautions: </div></h2>
        
        <Precaution  name=  {diseaseId} />

        <h3><div className="a3">Symtoms</div></h3>
        {/* {SymptomRender} */}
        {/* name = {diseaseId} */}
        <Symptom  name=  {diseaseId} />
      </div>
      </div>
    {/* </div> */}
    </>
  );
}

