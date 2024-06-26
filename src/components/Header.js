import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import down from "../../public/down.svg";
import classes from "../styles/Header.module.css";

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
          <Image src={logo} alt="logo" width={70} />
          <h2>Study Work Visa Guide</h2>
        </div>
        <div className={classes.header_content}>
          <span
            onClick={() => openDropDown(true)}
            className={showSub === "s" && classes.link}
          >
            <p>Study Visa </p>
            <Image
              src={down}
              width={20}
              style={{
                rotate: showSub === "s" && "180deg",
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
                rotate: showSub === "w" && "180deg",
              }}
            />
          </span>
        </div>
      </div>
      <div className={`${classes.sub_header} ${!showSub ? classes.hide : ""}`}>
        {Array(20)
          .fill()
          .map((x) => (
            <p className={classes.country}>Pakistan</p>
          ))}
      </div>
    </>
  );
};
export default Header;
