
import { Box, IconButton, Typography} from "@mui/material";
import React from "react";
import { useState } from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import jsIco from "../img/js.png";
import reactIco from "../img/react.png";
import mysqlIco from "../img/mysql.png";
import nodeIco from "../img/node.png";
import postgresIco from "../img/postgres.png";
import pythonIco from "../img/python.png";
import rubyIco from "../img/ruby.png";
import tfIco from "../img/tf.png";
import htmlIco from "../img/html.png";
import cssIco from "../img/css.png";

const Skills = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [js, setJs] = useState("");
    const [react, setReact] = useState("");

    const handleMouseEnter = (e) => {
      if (e.target.id === "JavaScript") {
        setJs(true);
      }  
      else if (e.target.id === "React") {
        setReact(true);
      } 
    };
    const handleMouseLeave = () => {
      setJs();
      setReact();
    };

    return (
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Skills" subtitle="Experienced Tech Stacks" alignItems="center"/>
        </Box>
        <Box m="20px" justifyContent="space-between" alignItems="center">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Web Dev"  subtitle=""/>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="js"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={jsIco}
              style={{ width: "10%", height: "10%" }}
            /> 
            <img
              alt="html"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={htmlIco}
              style={{ width: "10%", height: "10%" }}
            /> 
            <img
              alt="css"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={cssIco}
              style={{ width: "10%", height: "10%" }}
            />
          </Box>
          <br/>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="react"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={reactIco}
              style={{ width: "10%", height: "10%" }}
            />
            <img
              alt="node"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={nodeIco}
              style={{ width: "10%", height: "10%" }}
            />
            <img
              alt="ruby"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={rubyIco}
              style={{ width: "10%", height: "10%" }}
            />
          </Box>
        </Box>
        <Box m="20px">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Data Stacks"  subtitle=""/>
          </Box>
            <Box display="flex" justifyContent="center" alignItems="right">
              <img
                alt="python"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pythonIco}
                style={{ width: "10%", height: "10%" }}
              />
              <img
                alt="tensorflow"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={tfIco}
                style={{ width: "10%", height: "10%" }}
              />
              <img
                alt="postgres"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={postgresIco}
                style={{ width: "10%", height: "10%" }}
              />
              <img
                alt="mysql"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={mysqlIco}
                style={{ width: "10%", height: "10%" }}
              />
            </Box>
        </Box>
      </Box>
    );
};

export default Skills;