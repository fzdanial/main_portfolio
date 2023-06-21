import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { skills } from "../../data/data";

const Skills = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
          <Header title="Skills" subtitle="Experienced Tech Stacks"/>
          <div className='flex flex-wrap -m-4'>
            {skills.map((skill) => (
                /* add the programming icons later on */
                <a 
                    key={skills.icon} 
                    className="sm:w-1/2 w-100 p-4"
                >
                    <div className="flex relative">
                        <img 
                            alt="gallery" 
                            className="absolute inset-0 w-full h-full object-cover object-center" 
                            src={skills.icon}
                        />
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {skills.name}
                            </h1>
                        </div>
                    </div>
                </a>
            ))}
          </div>
        </Box>
        
    );
};

export default Skills;