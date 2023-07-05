import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import UDM from "../img/UberDataModel.png";
import DC from "../img/DesktopClean.jpg";


const Projects = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Box m="20px">
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Previous Projects"  subtitle="Notable personal projects"/>
            </Box>

            {/* Data projects*/}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* Row 1 */}
                <Box
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    sx={{
                        position: 'relative',
                        width: 300,
                        height: 300,
                        backgroundColor: 'primary.dark',
                        '&:hover::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                        zIndex: 1,
                        },
                    }}
                >
                    <a
                        href="https://github.com/fzdanial/uber_data_pipelining" // Replace with your desired URL
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ width: '100%', 
                                height: '100%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                flexDirection: 'column' }}
                    >
                        <img
                            alt="UDM"
                            className={`image ${isHovering ? 'image-darken' : ''}`}
                            src={UDM}
                        />
                        {isHovering && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 2,
                                }}
                            >
                                <Typography 
                                    variant="h5" 
                                    color={"#94e2cd"} 
                                    sx={{ m: '1px 0', fontWeight: 'bold', textAlign: 'center' }}
                                >
                                    Data Architecture & Engineering
                                </Typography>

                                <Typography 
                                    variant="h4" 
                                    color={"#e0e0e0"} 
                                    sx={{ m: '10px 0', fontWeight: 'bold', textAlign: 'center', whiteSpace: 'pre-line' }}
                                >
                                    Uber Data Pipeline
                                </Typography>
                                
                                <Typography 
                                    variant="subtitle1" 
                                    color={"#c2c2c2"} 
                                    sx={{ m: '5px 0', textAlign: 'center' }}
                                >
                                    An End-to-End Data Project using Uber Data as sample
                                </Typography>
                            </Box>
                        )}
                    </a>
                </Box>
                {/* Row 2 */}
                <Box
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    sx={{
                        position: 'relative',
                        width: 300,
                        height: 300,
                        backgroundColor: 'primary.dark',
                        '&:hover::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                        zIndex: 1,
                        },
                    }}
                >
                    <a
                        href="https://github.com/fzdanial/DesktopClean" // Replace with your desired URL
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ width: '100%', 
                                height: '100%', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                flexDirection: 'column' }}
                    >
                        <img
                            alt="DC"
                            className={`image ${isHovering ? 'image-darken' : ''}`}
                            src={DC}
                        />
                        {isHovering && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 2,
                                }}
                            >
                                <Typography 
                                    variant="h5" 
                                    color={"#94e2cd"} 
                                    sx={{ m: '1px 0', fontWeight: 'bold', textAlign: 'center' }}
                                >
                                    Python Automation
                                </Typography>

                                <Typography 
                                    variant="h4" 
                                    color={"#e0e0e0"} 
                                    sx={{ m: '10px 0', fontWeight: 'bold', textAlign: 'center', whiteSpace: 'pre-line' }}
                                >
                                    Desktop Cleaning App
                                </Typography>
                                
                                <Typography 
                                    variant="subtitle1" 
                                    color={"#c2c2c2"} 
                                    sx={{ m: '5px 0', textAlign: 'center' }}
                                >
                                    An OS observer to declutter the desktop folder by segregating files accordingly.
                                </Typography>
                            </Box>
                        )}
                    </a>
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;