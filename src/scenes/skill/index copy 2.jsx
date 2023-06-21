import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { skills } from "../../data/data";
import jsIco from "../img/js.png";
import reactIco from "../img/react.png";

const Skills = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // const [html, setHtml] = useState("");
    // const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    // const [boot, setBoot] = useState("");
    const [react, setReact] = useState("");
    // const [three, setThree] = useState("");

    const handleMouseEnter = (e) => {
      if (e.target.id === "JavaScript") {
        setJs(true);
      } 
      // else if (e.target.id == "CSS") {
      //   setCss(true);
      // } 
      // else if (e.target.id == "HTML") {
      //   setJs(true);
      // } 
      // else if (e.target.id == "Bootstrap") {
      //   setBoot(true);
      // } 
      else if (e.target.id === "React") {
        setReact(true);
      } 
      // else if (e.target.id == "Three.js") {
      //   setThree(true);
      // }
    };
    const handleMouseLeave = () => {
      //setHtml();
      //setCss();
      setJs();
      //setBoot();
      setReact();
      //setThree();
    };

    return (
        <Box m="20px">
          <Header title="Skills" subtitle="Experienced Tech Stacks"/>
          <div className="main-page-container">
            <div className="left-container"> 
              <div className="tech-stack-box">
                <div
                  className="tech-stack-single-box"
                  id="JavaScript"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={jsIco} className="tech-ico1" alt="js icon" />
                  <span>{js ? "JavaScript" : ""}</span>
                </div>
                <div
                  className="tech-stack-single-box"
                  id="React"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={reactIco} className="tech-ico2" alt="react icon" />
                  <span>{react ? "React.js" : ""}</span>
                </div>
              </div>  
            </div>
            <div className="right-container">
              hello
            </div>
          </div>
        </Box>

    );
};

export default Skills;