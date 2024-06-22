import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import down from "../../public/down.svg";
import classes from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [showSub, setShowSub] = useState("");
  const [countries, setCountries] = useState({ work: [], study: [] });

  useEffect(() => {
    // Fetch the JSON data
    fetch("/api/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading countries data:", error));
  }, []);

  const openDropDown = (study) => {
    setShowSub(
      (showSub === "s" && study) || (showSub === "w" && !study)
        ? ""
        : study
        ? "s"
        : "w"
    );
  };

  const handleCountryClick = (country) => {
    // setSelectedCountry(country);
    const visaType = showSub === "s" ? "study-visa" : "work-visa";
    // Update URL with query parameters
    router.push(`/${visaType}/${encodeURIComponent(country)}`);
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Image src={logo} alt="logo" width={70} />
          <h2>Study Work Visa Guide</h2>
        </div>
        <div className={classes.header_content}>
          <span
            onClick={() => openDropDown(true)}
            className={showSub === "s" && classes.link}
          >
            <p>Study Visa</p>
            <Image
              src={down}
              width={20}
              style={{
                rotate: showSub === "s" ? "180deg" : "0deg",
              }}
            />
          </span>
          <span
            onClick={() => openDropDown(false)}
            className={showSub === "w" && classes.link}
          >
            <p>Work Visa</p>
            <Image
              src={down}
              width={20}
              style={{
                rotate: showSub === "w" ? "180deg" : "0deg",
              }}
            />
          </span>
        </div>
      </div>
      <div className={`${classes.sub_header} ${!showSub ? classes.hide : ""}`}>
        {(showSub === "s" ? countries.study : countries.work)?.map(
          (country, index) => (
            <p
              key={index}
              className={classes.country}
              onClick={() => handleCountryClick(country)}
            >
              {country}
            </p>
          )
        )}
      </div>
    </>
  );
};

export default Header;
