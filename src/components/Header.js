import Image from "next/image";
import logo from "../../public/logo.png";
import classes from "../styles/Header.module.css";
import { useState } from "react";

const Header = () => {
  const [showSub, setShowSub] = useState("s");
  const openDropDown = (study) => {
    setShowSub(
      (showSub === "s" && study) || (showSub === "w" && !study)
        ? ""
        : study
        ? "s"
        : "w"
    );
  };
  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Image src={logo} alt="logo" width={50} />
          <h2>Study Work Visa Guide</h2>
        </div>
        <div className={classes.header_content}>
          <p onClick={() => openDropDown(true)}>Study Visa</p>
          <p onClick={() => openDropDown(false)}>Work Visa</p>
        </div>
      </div>
      <div className={`${classes.sub_header} ${!showSub ? classes.hide : ""}`}>
        {Array(50)
          .fill()
          .map((x) => (
            <p className={classes.country}>Pakistan</p>
          ))}
      </div>
    </>
  );
};
export default Header;
