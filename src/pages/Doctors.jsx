import React, { useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import { useParams, useNavigate } from "react-router-dom";

function Doctors() {
  const params = useParams();

  const { id } = params;

  console.log(id);

  const navigate = useNavigate(); // Assuming you want to use navigate for redirection

  // State for filtered doctors
  const [filteredDoc, setFilteredDoc] = useState([]);

  // Filter doctors based on speciality
  const applyFilter = () => {
    if (id) {
      setFilteredDoc(doctors.filter((doc) => doc.speciality === id));
    } else {
      console.log("No speciality provided");
      setFilteredDoc(doctors);
    }
  };
  
  const[showfilter,setshowfilter] = useState(false)
  // Use useEffect to trigger filter when doctors or speciality change
  useEffect(() => {
    console.log(id); // Log to check if the parameter is coming through
    applyFilter();
  }, [id]);

  console.log(filteredDoc);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors by speciality.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
       <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${ showfilter ? 'bg-[#5f6FFF] text-white' :''}`} onClick={()=>setshowfilter(prev => !prev)}>Filter</button>
        <div className={`flex flex-col gap-4 text-sm text-gary-600 ${showfilter ? 'flex' : 'hidden sm:flex'}`}>
          <p
            onClick={() =>
              id === "Gynecologist"
                ? navigate("/docters")
                : navigate("/docters/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gary-300 rounded transition-all cursor-pointer ${
              id === "Gynecologist" ? "bg-indigo-100 text-black0" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              id === "General physician"
                ? navigate("/docters")
                : navigate("/docters/General physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gary-300 rounded transition-all cursor-pointer ${
              id === "General physician" ? "bg-indigo-100 text-black0" : ""
            }`}
          >
            General Physician
          </p>
          <p
            onClick={() =>
              id === "Dermatologist"
                ? navigate("/docters")
                : navigate("/docters/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gary-300 rounded transition-all cursor-pointer ${
              id === "Dermatologist" ? "bg-indigo-100 text-black0" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              id === "Pediatricians"
                ? navigate("/docters")
                : navigate("/docters/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gary-300 rounded transition-all cursor-pointer ${
              id === "Pediatricians" ? "bg-indigo-100 text-black0" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              id === "Neurologist"
                ? navigate("/docters")
                : navigate("/docters/Neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gary-300 rounded transition-all cursor-pointer ${
              id === "Neurologist" ? "bg-indigo-100 text-black0" : ""
            }`}
          >
            Neurologist
          </p>
          {/* <p onClick={()=>id ==='Gastroenterologist' ? navigate('/docters'): navigate('/docters/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gary-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p> */}
        </div>

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filteredDoc.map((data, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${data._id}`)} // Make sure your route is correct
              className="bg-blue-50 border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={data.image} alt={data.name} />
              <div className="bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{data.name}</p>
                <p className="text-gray-600 text-sm">{data.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
