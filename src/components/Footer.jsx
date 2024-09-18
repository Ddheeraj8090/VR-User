import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaWifi,
} from "react-icons/fa";
import backicon from "../assets/backicon.png";
import footerImg from "../assets/footer.png";

const Footer = ({onMount}) => {
  const [data, setData] = useState([]);
  const [footerData, setFooterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/VRThemePark/user/getSection9?id=1`);
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

    const fetchFooterData = async () => {
      try {
        const response = await axios.get(`${url}/VRThemePark/user/getSection10?id=1`);
        setFooterData([response.data.data]);
      } catch (err) {
        console.error(
          "Error fetching data:",
          err.response ? err.response.data : err.message
        );
      }
    };

    fetchData();
    fetchFooterData();
  }, [onMount]);
  return (
    <div
      className=" text-white  "
      style={{
        backgroundImage: `url(${backicon})`,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${footerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          backgroundPosition: "center",
        }}
      >
        {data.map((item, index) => (
          <div key={index} className="container mx-auto">
            <div className="insta_feed_main py-10">
              <div className="top_heading_insta flex justify-center items-center ">
                
                <div className=" flex gap-3 justify-center items-center xl:ml-[410px] 2xl:ml-[440px]">
                  <img src={item.socialMediaImage} alt="" />
                  <div className="flex flex-col ">
                    <p className="text-[8px] font-Poppins font-semibold tracking-wide">
                      {item.socialMediaHeading1}
                    </p>
                    <h5 className="md:text-[16px] text-[14px] font-Poppins font-bold tracking-wide">
                      {item.socialMediaHeading2}
                    </h5>
                  </div>
                </div>
                <div className=" 2xl:ml-80 xl:ml-72">
                  <button className="rounded-md p-3 text-[14px] font-Poppins font-semibold text-white bg-blue-400 uppercase tracking-wider">
                    {item.contactUsButton.buttonText}
                  </button>
                </div>
              </div>
              <div className="insta_feed_main_vr_tp">
                <div className="inner_insta_fees_vr_tp">
                <div className="Insta_feed_img_box lg:flex grid grid-cols-2    place-items-center justify-center items-center place-content-center gap-0 pt-10">
                <div className="p-0">
                  <img
                    src={item.contactUsImages.img1}
                    alt=""
                    className="md:w-[270px] md:h-[270px] w-full h-full object-cover"
                  />
                </div>
                <div className="p-0">
                  <img
                    src={item.contactUsImages.img2}
                    alt=""
                    className="md:w-[270px] md:h-[270px] w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={item.contactUsImages.img3}
                    alt=""
                    className="md:w-[270px] md:h-[270px] w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={item.contactUsImages.img4}
                    alt=""
                    className="md:w-[270px] md:h-[270px] w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="Insta_feed_img_box lg:flex grid grid-cols-2    place-items-center justify-center items-center place-content-center gap-0 pb-10">
                <div>
                  <img
                    src={item.contactUsImages.img5}
                    alt=""
                    className="md:w-[270px] md:h-[270px] w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={item.contactUsImages.img6}
                    alt=""
                    className="md:w-[270px] md:h-[270px] w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={item.contactUsImages.img7}
                    alt=""
                    className="md:w-[270px] md:h-[270px] w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src={item.contactUsImages.img8}
                    alt=""
                    className="md:w-[270px] md:h-[270px] w-full h-full object-cover"
                  />
                </div>
              </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div>
                  <img src={item.contactUslinkImages.img1} alt="" />
                </div>
                <div>
                  <img src={item.contactUslinkImages.img2} alt="" />
                </div>
                <div>
                  <img src={item.contactUslinkImages.img3} alt="" />
                </div>
                <div>
                  <img src={item.contactUslinkImages.img4} alt="" />
                </div>
              </div>
            </div>
            <div className="we_are_footer_heading">
              <h3 className="uppercase font-Poppins font-medium tracking-widest text-[25px] text-center">
                {item.featuredTitle}
              </h3>
            </div>
            <div className="news_logos flex flex-col justify-center items-center gap-5 py-12">
              <div className="flex flex-wrap justify-center items-center gap-9 ">
                <img src={item.contactUsFeaturedImages.img1} alt="" />
                <img src={item.contactUsFeaturedImages.img2} alt="" />
                <img src={item.contactUsFeaturedImages.img3} alt="" />
              </div>
              <div className="flex flex-wrap justify-center items-center gap-9">
                <img src={item.contactUsFeaturedImages.img4} alt="" />
                <img src={item.contactUsFeaturedImages.img5} alt="" />
                <img src={item.contactUsFeaturedImages.img6} alt="" />
              </div>
            </div>
            {footerData.map((element, index) => (
              <div
                key={index}
                className="menu_footer_main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20 gap-10 border-t border-t-[#FF00B8] pt-20 "
              >
                <ul className="fooetr_menu_inner one flex flex-col justify-center items-center gap-3">
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink1}
                  </li>
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink2}
                  </li>
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink3}
                  </li>
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink4}
                  </li>
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink5}
                  </li>
                </ul>
                <div className="Footer_menu_logo flex flex-col justify-center items-center gap-2">
                  <img
                    src={element.image}
                    alt=""
                    className="h-full w-[170px] object-content"
                  />
                  <p className="font-Poppins text-[14px] text-gray-400 text-center pt-5 ">
                    {element.body}
                  </p>
                </div>
                <ul className="fooetr_menu_inner  flex flex-col justify-center items-center gap-3">
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink6}
                  </li>
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink7}
                  </li>
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink8}
                  </li>
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink9}
                  </li>
                  <li className="font-Poppins text-gray-400 text-center tracking-wider">
                    {element.navLink10}
                  </li>
                </ul>
              </div>
            ))}
            <ul className="Footer_social_icons flex justify-center items-center gap-8 pt-10  pb-20">
              <li>
                <FaFacebookF className="text-[20px] font-bold" />
              </li>
              <li>
                <FaTwitter className="text-[20px] font-bold" />
              </li>
              <li>
                <FaPinterestP className="text-[20px] font-bold" />
              </li>
              <li>
                <FaYoutube className="text-[20px] font-bold" />
              </li>
              <li>
                <FaInstagram className="text-[20px] font-bold" />
              </li>

              <li>
                <FaWifi className="text-[20px] font-bold" />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
