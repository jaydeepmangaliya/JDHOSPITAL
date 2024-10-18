import React, { useEffect, useState } from "react";

import { assets, doctors } from "../assets/assets";
import { useParams } from "react-router-dom";

function Appoinment() {
  const { docId } = useParams();
  const [docInfo, setdocInfo] = useState(null);

  const getInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setdocInfo(docInfo);
  };

  useEffect(() => {
    getInfo();
  }, [docId]);

  return (
    docInfo && (
      <div>
        {/*docter details  */}
        <div className=" flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-[#5f6FFF] w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          {/* docinfo name degree and exprience */}
          <div className="flex-1 border border-gary-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* about  */}
            <div>
              <p className="flex items-center gap-1 textsm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p>
              Appintment fee :
              <span className="text-gray-600">RS.{docInfo.fees}</span>
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default Appoinment;
