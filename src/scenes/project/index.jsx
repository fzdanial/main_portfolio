import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";


const Projects = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Previous Projects"  subtitle="Notable personal projects"/>
            <Typography
                variant="h5"
                color = {colors.grey[300]}
                sx = {{m: "15px 0 5px 20px"}}
            >
                This page is currently a work in progress. For more information on my previous work, please head over to my links at the top left corner.
                You may also check out my GitHub page 
                <a 
                    href="https://github.com/fzdanial"
                    target="_blank" 
                    rel="noopener noreferrer" 
                > 
                        here
                    </a>. 
            </Typography>
        </Box>
    );
};

export default Projects;