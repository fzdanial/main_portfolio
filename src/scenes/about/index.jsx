import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Link } from "react-router-dom";

const About = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Hi, I'm Danial"  subtitle="Welcome to my page."/>
                <Box display="flex" mt="20px">
                    <Button
                        href="https://drive.google.com/file/d/1WPKUu0DPsmI-CCym1wS3gWL9qBjb4IKq/view?usp=sharing"
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.greenAccent[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                        target="_blank" 
                        rel="noopener noreferrer"  
                    > 
                    <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                    Download CV
                    </Button>
                </Box>
            </Box>

            {/* Page Content */}
            <Box m="20px" display="flex" justifyContent="space-between" alignItems="left">
                <Typography variant="h4"  gutterBottom  >
                    A self-trained data scientist and full-stack developer.
                    <br/>
                    All data has stories to tell, and I vow to listen, interpret, 
                    <br/>
                    and harness their true potential.
                </Typography>
            </Box>
            
            {/* Previous Projects */}
            <Box m="20px">
                <Header title="Previous Projects"  subtitle="Notable personal projects"/>
                <Box display="flex" mt="20px">
                    <Button
                        component={Link}
                        to={'/project'}
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.greenAccent[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    > 
                    See Projects Here
                    </Button>
                </Box>
            </Box>

            {/* Skills */}
            <Box m="20px">
                <Header title="Skills" subtitle="Experienced Tech Stacks"/>
                <Box display="flex" mt="20px">
                    <Button
                        component={Link}
                        to="/skill"
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.greenAccent[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    > 
                    See Skills Here
                    </Button>
                </Box>
            </Box>

            {/* Contact Me */}
            <Box m="20px">
                <Header title="Contact Me" subtitle="Get in touch"/>
                <Box display="flex" alignItems="left" >
                    <Button
                        href="https://www.linkedin.com/in/fzdanial/"
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.greenAccent[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px"
                        }}
                        target="_blank" 
                        rel="noopener noreferrer" 
                    > 
                    LinkedIn
                    </Button>
                    <Button sx={{padding: "5px"}}></Button>
                    <Button
                        href="https://github.com/fzdanial"
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.greenAccent[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                        target="_blank" 
                        rel="noopener noreferrer" 
                    > 
                    GitHub
                    </Button>
                </Box>
            </Box>
        </Box>

        

    );
    
}

export default About;