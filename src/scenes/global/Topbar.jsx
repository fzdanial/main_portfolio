import {Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from "@mui/material/Typography";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
    <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box 
            display="flex" 
        >
            
            <IconButton 
                type ="button" 
                sx= {{ p:1 }}
                href="https://www.linkedin.com/in/fzdanial/"
                target="_blank" 
                rel="noopener noreferrer" 
            >
                <LinkedInIcon />
            </IconButton>
            <IconButton 
                type ="button" 
                sx= {{ p:1 }}
                href="https://github.com/fzdanial"
                target="_blank" 
                rel="noopener noreferrer" 
            >
                <GitHubIcon />
            </IconButton>
            <IconButton 
                type ="button" 
                sx= {{ p:1 }}
                href="https://drive.google.com/file/d/1T3MOjUy1_3FJEwWNNvH1RzHFanZdRdA1/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer" 
            >
                <Typography  
                    variant="h5" 
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    CV
                </Typography>
            </IconButton>
        </Box>

        {/* ICONS */}
        <Box display="flex">
            {/* Later add a contact me icon link */}
            {/* <IconButton>
                <EmailOutlinedIcon/>
            </IconButton> */}

            {/* Dark theme button */}
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon/>
                ) : (
                    <LightModeOutlinedIcon/>
                )}
            </IconButton>
        </Box>
    </Box>);
}

export default Topbar;