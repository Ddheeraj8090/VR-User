import React, { useEffect, useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import {
  FaBuilding,
  FaCog,
  FaMapMarkedAlt,
  FaCircleNotch,
} from "react-icons/fa";
import axios from "axios";

const MobileNavbar = ({ onMount }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/VRThemePark/user/getSection1?id=1`
        );
        setData([response.data.data]);
        if (response.data.statusCode === 200) {
          onMount();
        }
      } catch (err) {
        console.error(
          "Error fetching data:",
          err.response ? err.response.data : err.message
        );
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onMount]);
  return (
    <div className="Mobile_menu_bottom bg-purple-700 lg:hidden shadow-lg w-full rounded-t-2xl z-[9999] fixed bottom-0 text-white py-2 px-8">
      {data.map((item, index) => (
        <ul key={index} className="flex justify-between items-center">
          <li className="flex flex-col justify-center items-center">
            <MdOutlineHome className="text-[25px] font-bold" />
            <p className="font-Poppins font-medium tracking-wide text-[12px] mt-1 uppercase">
              {item.navlink1}
            </p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <FaCog className="text-[25px] font-bold" />
            <p className="font-Poppins font-medium tracking-wide text-[12px] mt-1 uppercase">
              {item.navlink2}
            </p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <FaMapMarkedAlt className="text-[25px] font-bold" />
            <p className="font-Poppins font-medium tracking-wide text-[12px] mt-1 uppercase">
              {item.navlink3}
            </p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <FaCircleNotch className="text-[25px] font-bold" />
            <p className="font-Poppins font-medium tracking-wide text-[12px] mt-1 uppercase">
              {item.navlink4}
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MobileNavbar;
